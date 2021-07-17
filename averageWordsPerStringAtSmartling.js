/*
* This function computes the averge number of words of a single string as presented by the Smartling translation tool for Coursera's Global Translator Community.
* If a normalization by page is desired, the result may be multiplied by the page number, whereas the maximum number in Smartling is 100 strings per page.
* The reason why the function does not simply return the total word count of a page is because the average per string seems more suitable to further compute
* averages across multiple pages, videos and courses, as the pages themselves may contain different numbers of strings.
*/

function averageWordsPerStringAtSmartling() {

	//get the string containing elements from the page by the (hopefully uniform) class name
	var stringCollection = document.getElementsByClassName("segments__source___2Vmtne");

	//total number of strings per page
	var stringNumber = stringCollection.length;

	//placeholder for a current string to count words
	var currentString = "";

	//Unicode for empty space and line break
	var space = 32;
	var linebreak = 9166;

	//counter variables for all words in a page, words per string, and chars per string
	var wordCountTotal = 0;
	var wordsPerString = 0;
	var charsPerString = 0;

	//result variable for average words per string in a particular page
	var averageWordsPerString = 0;

	//iterate through the string collection and count words using the above signs as separators
	for(var i = 0; i < stringNumber; ++i) {

		//initialize words per string counter with 1 since the first word is not captured by the separators but always there
		wordsPerString = 1;

		//store current string in a variable
		currentString = stringCollection[i].innerText;

		//get number of chars for current string
		charsPerString = currentString.length;

		//iterate through the current string, apply separators and count words
		for(var j = 0; j < charsPerString; ++j) {
			if(currentString.charCodeAt(j) == space || currentString.charCodeAt(j) == linebreak)
				++wordsPerString;
		}

		//update total word counter
		wordCountTotal += wordsPerString;
	}

	//return the division of total word count by total string number to get average words per string, with decimals for potential further normalization
	return +(wordCountTotal / stringNumber).toFixed(2);

}


/*
* compact version of the above function with an adapted return statement so that the total words per page is returned
*/

function totalWordsOfPageAtSmartling() {
	var stringCollection = document.getElementsByClassName("segments__source___2Vmtne");
	var stringNumber = stringCollection.length;
	var currentString = "";
	var wordCountTotal = 0;
	var wordsPerString = 0;
	var charsPerString = 0;
	var averageWordsPerString = 0;
	for(var i = 0; i < stringNumber; ++i) {
		wordsPerString = 1;
		currentString = stringCollection[i].innerText;
		charsPerString = currentString.length;
		for(var j = 0; j < charsPerString; ++j)
			if(currentString.charCodeAt(j) == 32 || currentString.charCodeAt(j) == 9166)
				++wordsPerString;
		wordCountTotal += wordsPerString;
	}
	return wordCountTotal;
}

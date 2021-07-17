/*
* compact version of the averageWordsPerString function with an adapted return statement so that the total words per page is returned
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

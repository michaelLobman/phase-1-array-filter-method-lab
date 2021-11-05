/*
function findMatching(array, string) {
	array.filter(looseMatch(name));
}


function looseMatch(name) {
	return array.name.toLowerCase() === string.toLowerCase();
}
*/

function findMatching(array, string) {
	return array.filter (element => element.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string) {
	return array.filter (element => element.startsWith(string));
}


function matchName(array, string) {
	return array.filter(function(element){
		return element.name === string;
	})
}

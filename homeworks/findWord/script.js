var textarea = document.getElementById("sandbox"),
    text = textarea.value; 

var low = text.toLowerCase();
var splitted = low.split(" "); 


function addWord(dictionary, word) {
    if (!(word in dictionary)) {
        dictionary[word] = 0;
    } 
    dictionary[word] +=1; 
} 

for (var i = 0; i < splitted.length; ++i) {
    addWord(splitted, splitted[i]); 
} 



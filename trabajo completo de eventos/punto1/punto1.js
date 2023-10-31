function countUniqueWords() {
    var input = document.getElementById("input").value;
    var words = input.toLowerCase().split(/[ ,.;:!?]+/);
    var uniqueWords = [];
    for (var i = 0; i < words.length; i++) {
        if (!uniqueWords.includes(words[i])) {
            uniqueWords.push(words[i]);
        }
    }
    document.getElementById("result").innerHTML = "Número de palabras únicas: " + uniqueWords.length;
}
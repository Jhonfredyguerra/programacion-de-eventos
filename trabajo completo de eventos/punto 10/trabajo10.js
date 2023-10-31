function calculateLength() {
    var sentence = document.getElementById("sentence").value;
    var words = sentence.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        result += "La palabra '" + words[i] + "' tiene una longitud de " + words[i].length + "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
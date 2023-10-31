function countWords() {
    var sentence = document.getElementById("sentence").value;

    // dividir la frase en palabras utilizando el espacio como separador
    var words = sentence.split(" ");

    // eliminar espacios vacíos al principio y al final de las palabras
    var trimmedWords = words.filter(function(word) {
      return word.trim() !== "";
    });

    // contar el número de palabras
    var numWords = trimmedWords.length;

    document.getElementById("result").innerHTML = "La frase ingresada contiene " + numWords + " palabras.";
  }
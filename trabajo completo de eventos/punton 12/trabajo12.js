/*

function calcularLongitud() {
    // Obtener el contenido del textarea
    var oracion = document.getElementById("inputSentence").value;

    // Dividir la oración en palabras
    var palabras = oracion.split(/\s+/);

    // Crear una cadena para mostrar la longitud de cada palabra
    var resultado = "";
    for (var i = 0; i < palabras.length; i++) {
        resultado += "Palabra " + (i + 1) + ": " + palabras[i].length + " caracteres<br>";
    }

    // Mostrar el resultado en el elemento HTML
    document.getElementById("result").innerHTML = resultado;
}
*/
function modifyWords() {
    var words = ["Hola", "Mundo", "Full", "Stack"];
    var modifiedWords = words.map(function(word) {
        return word.split('').map(function(letter) {
            if (letter === letter.toUpperCase()) {
                return letter.toLowerCase();
            } else {
                return letter.toUpperCase();
            }
        }).join('');
    });
    document.getElementById("result").innerHTML = modifiedWords;
}
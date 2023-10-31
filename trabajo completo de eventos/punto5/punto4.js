function verificarPalabraClave() {
    // Obtener el valor del input de texto y de la palabra clave
    var inputText = document.getElementById("inputText").value;
    var inputKeyword = document.getElementById("inputKeyword").value;

    // Verificar si la palabra clave aparece en la cadena de texto
    var aparecePalabraClave = inputText.toLowerCase().includes(inputKeyword.toLowerCase());

    // Mostrar el resultado en el elemento HTML
    if (aparecePalabraClave) {
        document.getElementById("result").textContent = "La palabra clave aparece en la cadena de texto.";
    } else {
        document.getElementById("result").textContent = "La palabra clave no aparece en la cadena de texto.";
    }
}
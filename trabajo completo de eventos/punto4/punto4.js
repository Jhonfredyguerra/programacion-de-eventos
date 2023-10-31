function reemplazarVocales() {
    // Obtener el valor del input de texto y del carácter
    var inputText = document.getElementById("inputText").value;
    var inputCharacter = document.getElementById("inputCharacter").value;

    // Utilizar una expresión regular para reemplazar las vocales (mayúsculas y minúsculas)
    var cadenaModificada = inputText.replace(/[aeiouAEIOU]/g, inputCharacter);

    // Mostrar la cadena modificada en el elemento HTML
    document.getElementById("result").textContent = cadenaModificada;
}
function duplicarElementos() {
    // Obtener el valor del input y dividirlo en un array
    var inputArray = document.getElementById("inputArray").value;
    var arrayDeNumeros = inputArray.split(',').map(function(item) {
        return parseInt(item.trim(), 10);
    });

    // Utilizar la función map para duplicar cada elemento
    var arrayDuplicado = arrayDeNumeros.map(function(numero) {
        return numero * 2;
    });

    // Mostrar el array resultante en el elemento HTML
    document.getElementById("result").innerHTML = arrayDuplicado;
}
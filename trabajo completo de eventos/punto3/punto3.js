function checkAnagram() {
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;

    // Limpiar las cadenas de espacios en blanco y convertirlas en minúsculas
    string1 = string1.trim().toLowerCase();
    string2 = string2.trim().toLowerCase();

    // Verificar si las cadenas tienen la misma longitud
    if (string1.length !== string2.length) {
        document.getElementById("result").innerHTML = "Las cadenas no son anagramas";
        return;
    }

    // Convertir las cadenas en arrays de caracteres y ordenar los caracteres alfabéticamente
    var sortedString1 = string1.split('').sort().join('');
    var sortedString2 = string2.split('').sort().join('');

    // Verificar si los arrays de caracteres ordenados son iguales
    if (sortedString1 === sortedString2) {
        document.getElementById("result").innerHTML = "Las cadenas son anagramas";
    } else {
        document.getElementById("result").innerHTML = "Las cadenas no son anagramas";
    }
}
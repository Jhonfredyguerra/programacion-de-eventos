function convertToUppercase() {
    var input = document.getElementById("input").value;
    var uppercaseString = input.toUpperCase();
    document.getElementById("result").innerHTML = "Mayúsculas: " + uppercaseString;
}

function convertToLowercase() {
    var input = document.getElementById("input").value;
    var lowercaseString = input.toLowerCase();
    document.getElementById("result").innerHTML = "Minúsculas: " + lowercaseString;
}
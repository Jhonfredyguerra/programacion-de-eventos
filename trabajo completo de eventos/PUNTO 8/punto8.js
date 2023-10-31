var fruits = ["manzana", "banana", "naranja", "uva", "pera"];

function checkFruit() {
    var input = document.getElementById("fruit-input").value.toLowerCase();
    if (fruits.includes(input)) {
        document.getElementById("result").innerHTML = "si es una fruta ";
    } else {
        document.getElementById("result").innerHTML = "no es un fruta";
    }
}
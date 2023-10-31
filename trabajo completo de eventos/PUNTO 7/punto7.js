function reverseString() {
    var input = document.getElementById("input").value;
    var reversedString = "";
    for (var i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    document.getElementById("result").innerHTML = reversedString;
}


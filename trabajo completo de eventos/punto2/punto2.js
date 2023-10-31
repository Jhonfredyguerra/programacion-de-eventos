function checkPassword() {
    var password = document.getElementById("password").value;

    // Verificar longitud de la contraseña
    if (password.length < 8) {
        document.getElementById("result").innerHTML = "La contraseña debe tener al menos 8 caracteres";
        return;
    }

    // Verificar si contiene al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
        document.getElementById("result").innerHTML = "La contraseña debe contener al menos una letra mayúscula";
        return;
    }

    // Verificar si contiene al menos un número
    if (!/[0-9]/.test(password)) {
        document.getElementById("result").innerHTML = "La contraseña debe contener al menos un número";
        return;
    }

    // Verificar si contiene espacios en blanco
    if (/\s/.test(password)) {
        document.getElementById("result").innerHTML = "La contraseña no debe contener espacios en blanco";
        return;
    }

    // Si pasó todas las verificaciones
    document.getElementById("result").innerHTML = "¡La contraseña cumple con todos los criterios!";
}
function validateForm(event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores

    let checkbox = document.getElementById("privacyCheck");
    let errorMessage = document.getElementById("error-message");

    if (!checkbox.checked) {
        errorMessage.textContent = "Debes aceptar la política de privacidad.";
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        alert("Formulario enviado correctamente");
        return true; // Aquí puedes permitir el envío real si lo deseas
    }
}
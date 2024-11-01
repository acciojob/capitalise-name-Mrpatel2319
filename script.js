// Function to convert input to uppercase when the input field loses focus
function convertToUppercase() {
    const inputField = document.getElementById('fname');
    inputField.value = inputField.value.toUpperCase();
}

// Adding an event listener for the 'blur' event on the input field
document.getElementById('fname').addEventListener('blur', convertToUppercase);

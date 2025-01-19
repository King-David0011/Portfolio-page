const display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
    if (display.value === "0" || display.dataset.reset) {
        display.value = value;
        display.dataset.reset = "";
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    display.value = "0";
}

// Calculate and display the result
function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result;
        display.dataset.reset = "true";
    } catch (error) {
        alert('Invalid calculation');
        clearDisplay();
    }
}

// Handle keyboard input
window.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        appendValue(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculateResult();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1) || "0";
    } else if (key === "Escape") {
        clearDisplay();
    }
});

// Initialize the display with 0
clearDisplay();

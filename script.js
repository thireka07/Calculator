const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function allClear() {
    display.value = "";
}

function result() {
    try {
        // Replace percentages correctly before evaluation
        const expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
    } catch {
        alert("Invalid format used");
    }
}

function clearLastElement() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        result();
    }
});

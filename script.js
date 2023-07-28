let value = "";

function onClear(event) {
    const target = event.target;
    const targetValue = target.value;
    if (targetValue === "clear") {
        setValue("");
    } else if (targetValue === "Backspace") {
        setValue(value.slice(0, -1));
    }
    console.log(value);
}

function handleKeyDown(event) {
    const key = event.key;
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        setValue(value + key);
    } else if (event.keyCode === 8) {
        setValue(value.slice(0, -1));
    } else {
        alert("Only numbers are allowed");
    }
}

function equal() {
    console.log(value);
    try {
        if (value === "") {
            alert("Input box is empty");
        } else {
            setValue(eval(value));
        }
    } catch {
        alert("Octal literals are not allowed");
    }
}

function setValue(newValue) {
    value = newValue;
    document.getElementById("result").value = value;
}

function initializeCalculator() {
    document.getElementById("clear").addEventListener("click", (event) => onClear(event));
    document.getElementById("Backspace").addEventListener("click", (event) => onClear(event));
    document.getElementById("dot").addEventListener("click", () => setValue(value + "."));
    document.getElementById("multiply").addEventListener("click", () => setValue(value + "*"));
    document.getElementById("7").addEventListener("click", () => setValue(value + "7"));
    document.getElementById("8").addEventListener("click", () => setValue(value + "8"));
    document.getElementById("9").addEventListener("click", () => setValue(value + "9"));
    document.getElementById("divide").addEventListener("click", () => setValue(value + "/"));
    document.getElementById("4").addEventListener("click", () => setValue(value + "4"));
    document.getElementById("5").addEventListener("click", () => setValue(value + "5"));
    document.getElementById("6").addEventListener("click", () => setValue(value + "6"));
    document.getElementById("subtract").addEventListener("click", () => setValue(value + "-"));
    document.getElementById("1").addEventListener("click", () => setValue(value + "1"));
    document.getElementById("2").addEventListener("click", () => setValue(value + "2"));
    document.getElementById("3").addEventListener("click", () => setValue(value + "3"));
    document.getElementById("add").addEventListener("click", () => setValue(value + "+"));
    document.getElementById("0").addEventListener("click", () => setValue(value + "0"));
    document.getElementById("00").addEventListener("click", () => setValue(value + "00"));
    document.getElementById("equal").addEventListener("click", equal);
    document.getElementById("result").addEventListener("keydown", handleKeyDown);
}
initializeCalculator();
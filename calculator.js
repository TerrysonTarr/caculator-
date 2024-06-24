document.addEventListener("DOMContentLoaded", function() {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn");
    let screenValue = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.value;

            if (buttonText === "=") {
                try {
                    screen.value = eval(screenValue);
                    screenValue = screen.value;
                } catch (e) {
                    screen.value = "Error";
                    screenValue = "";
                }
            } else if (buttonText === "C") {
                screenValue = "";
                screen.value = screenValue;
            } else if (buttonText === "DEL") {
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue;
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        });
    });
});
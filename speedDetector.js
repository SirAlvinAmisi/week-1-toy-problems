// speedDetector.js
function checkSpeed() {
    const speed = prompt("Enter the speed of the car (in km/h):");
    const numericSpeed = Number(speed);

    if (isNaN(numericSpeed) || numericSpeed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    if (numericSpeed <= 70) {
        console.log("Ok");
    } else {
        const points = Math.floor((numericSpeed - 70) / 5);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

// Run the function
checkSpeed();

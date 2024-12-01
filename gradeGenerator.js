// gradeGenerator.js
function getGrade() {
    const marks = prompt("Enter student marks (0-100):"); //prompts user to enter grade
    const numericMarks = Number(marks);

    if (isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) 
        // checks if input is a number and also falls within the allowed range
        {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    let grade;
    if (numericMarks > 79) {
        grade = "A";
    } else if (numericMarks >= 60) {
        grade = "B";
    } else if (numericMarks >= 50) {
        grade = "C"
    } else if (numericMarks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log(`The grade is: ${grade}`);
}

// Run the function
getGrade();

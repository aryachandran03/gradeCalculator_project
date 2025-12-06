// Function for grade calculation
function calculateGrade() {
    //alert('Hi');
    // Taking marks as inputs
    let sub1 = parseFloat(prompt("Enter marks for English (0-100):").trim());
    let sub2 = parseFloat(prompt("Enter marks for Hindi (0-100):").trim());
    let sub3 = parseFloat(prompt("Enter marks for Mathematics (0-100):").trim());
    let sub4 = parseFloat(prompt("Enter marks for Science (0-100):").trim());
    let sub5 = parseFloat(prompt("Enter marks for Social Science (0-100):").trim());

    // Mark value validation

    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3) || isNaN(sub4) || isNaN(sub5)) {
        alert("Enter valid marks");
        return;
    }

    // Calculating total and average
    const subTotal = sub1 + sub2 + sub3 + sub4 + sub5;
    const numberOfSubjects = 5;
    const Average = subTotal / numberOfSubjects;

    // Finding the grade
    let Grade = "";
    if (Average >= 90)
        Grade = "A+";
    else if (Average >= 80)
        Grade = "A";
    else if (Average >= 70)
        Grade = "B";
    else if (Average >= 60)
        Grade = "C";
    else if (Average >= 50)
        Grade = "D";
    else
        Grade = "F";

    //Show the grade
    alert("Congratulations! Your Grade is: " + Grade + " and your average mark is " + Average);
}
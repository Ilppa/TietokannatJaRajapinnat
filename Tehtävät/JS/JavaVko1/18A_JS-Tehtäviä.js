const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

if (num1 > num2) {
    alert(`The larger number is ${num1}`);
} else if (num2 > num1) {
    alert(`The larger number is ${num2}`);
} else {
    alert("Both numbers are equal");
}

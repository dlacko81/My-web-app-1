// Function to calculate simple interest
function calculateInterest() {
    // Get values from input fields
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid values for all fields.";
        return;
    }

    // Calculate simple interest
    const interest = (principal * rate * time) / 100;

    // Display the result
    document.getElementById("result").innerHTML = `The simple interest is: ₹${interest.toFixed(2)}`;
}

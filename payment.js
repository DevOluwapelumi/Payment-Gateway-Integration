// This is a fictional API endpoint provided by PayNowGateway for processing payments
const paymentApiUrl = "https://paynowgateway.com/api/process-payment";

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    const paymentData = {
        cardNumber,
        expiryDate,
        cvv,
        // You might also include other relevant data like amount, currency, etc.
    };

    // Make an API request to process the payment
    fetch(paymentApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the payment gateway
        if (data.success) {
            document.getElementById("result").textContent = "Payment successful!";
        } else {
            document.getElementById("result").textContent = "Payment failed. Please try again.";
        }
    })
    .catch(error => {
        console.error("An error occurred:", error);
        document.getElementById("result").textContent = "An error occurred while processing the payment.";
    });
});

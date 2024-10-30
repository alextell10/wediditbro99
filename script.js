document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const message = document.getElementById('message').value;
    const responseMessageDiv = document.getElementById('responseMessage');

    // Simulate an API call with a timeout
    setTimeout(() => {
        responseMessageDiv.textContent = `Your message: "${message}" has been submitted!`;
        responseMessageDiv.classList.remove('hidden');
    }, 500);

    // Clear the form
    this.reset();
});

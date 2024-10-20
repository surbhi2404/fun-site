const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const modal = document.getElementById("modal");
const doubtModal = document.getElementById("doubt-modal");
const finalModal = document.getElementById("final-modal");
const finalResponseModal = document.getElementById("final-response-modal");
const notLoveModal = document.getElementById("not-love-modal");
const finalDecisionModal = document.getElementById("final-decision-modal");
const readyModal = document.getElementById("ready-modal");
const loveConfirmModal = document.getElementById("love-confirm-modal");

const loveButton = document.getElementById("love-btn");
const doubtButton = document.getElementById("doubt-btn");
const thinkButton = document.getElementById("think-btn");
const finalYesButton = document.getElementById("final-yes-btn");
const finalNoButton = document.getElementById("final-no-btn");
const finalConfirmYesButton = document.getElementById("final-confirm-yes-btn");
const finalConfirmNoButton = document.getElementById("final-confirm-no-btn");
const thinkAgainButton = document.getElementById("think-again-btn");
const finalDecisionYesButton = document.getElementById("final-decision-yes-btn");
const finalDecisionNoButton = document.getElementById("final-decision-no-btn");
const readyYesButton = document.getElementById("ready-yes-btn");
const loveConfirmYesButton = document.getElementById("love-confirm-yes-btn");
const loveConfirmNoButton = document.getElementById("love-confirm-no-btn");

const consentCheckbox = document.getElementById("consent-checkbox");
const submitButton = document.getElementById("submit-btn");


noButton.addEventListener("touchstart", function() {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;

    this.style.transition = "all 0.3s ease";
    this.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener("click", function() {
    finalModal.style.display = "flex"; // Show final confirmation modal
});

// Handle button clicks in the first modal
loveButton.addEventListener("click", function() {
    modal.style.display = "none"; // Close the modal
    alert("I knew you'd say yes!");
});

doubtButton.addEventListener("click", function() {
    modal.style.display = "none"; // Close the modal
    doubtModal.style.display = "flex"; // Show doubt modal
});

// Handle button click in the doubt modal
thinkButton.addEventListener("click", function() {
    doubtModal.style.display = "none"; // Close the doubt modal
    alert("You have decided finally. Now answer again.");
    finalResponseModal.style.display = "flex"; // Show final response modal
});

// Handle final confirmation button clicks
finalYesButton.addEventListener("click", function() {
    loveConfirmModal.style.display = "flex"; // Show love confirmation modal
    finalModal.style.display = "none"; // Hide final modal
});

finalNoButton.addEventListener("click", function() {
    notLoveModal.style.display = "flex"; // Show not loving modal
    finalModal.style.display = "none"; // Hide final modal
});

// Handle final response button clicks
finalConfirmYesButton.addEventListener("click", function() {
    alert("Yay! I knew it! ❤️");
    finalResponseModal.style.display = "none"; // Close final response modal
});

finalConfirmNoButton.addEventListener("click", function() {
    finalDecisionModal.style.display = "flex"; // Show final decision modal
    finalResponseModal.style.display = "none"; // Hide final response modal
});

// Handle not love modal button click
thinkAgainButton.addEventListener("click", function() {
    notLoveModal.style.display = "none"; // Close not love modal
    readyModal.style.display = "flex"; // Show ready modal
});

// Handle final decision modal buttons
finalDecisionYesButton.addEventListener("click", function() {
    loveConfirmModal.style.display = "flex"; // Show love confirmation modal
    finalDecisionModal.style.display = "none"; // Hide final decision modal
});

finalDecisionNoButton.addEventListener("click", function() {
    alert("Shut up, I know you love me and I love you too! ❤️ "); // Message for indecision
    finalDecisionModal.style.display = "none"; // Hide final decision modal
});

// Handle love confirmation modal buttons
loveConfirmYesButton.addEventListener("click", function() {
    alert("I love you too! ❤️");
    loveConfirmModal.style.display = "none"; // Close love confirmation modal
});

loveConfirmNoButton.addEventListener("click", function() {
    alert("Really? Think again!");
    loveConfirmModal.style.display = "none"; // Close love confirmation modal
});

// Additional event listeners for ready modal
readyYesButton.addEventListener("click", function() {
    finalResponseModal.style.display = "flex"; // Show final response modal
    readyModal.style.display = "none"; // Close ready modal
});

// Enable submit button when checkbox is checked
consentCheckbox.addEventListener("change", function() {
    if (this.checked) {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
});

// Handle submit button click
submitButton.addEventListener("click", function() {
    alert("Your consent has been submitted!");
    // You can add more logic here if needed
    window.location.href = "marriage.html"; // Redirect to the new page
});

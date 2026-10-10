const modalOverlay = document.getElementById("modalOverlay");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

let modalDismissed = false;

// Open modal
function openModal() {
    if (modalDismissed) return;

    modalOverlay.classList.add("active");
    emailInput.focus();
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove("active");
    modalDismissed = true;
}

// Automatically show modal after 3 seconds
const modalTimer = setTimeout(() => {
    openModal();
}, 3000);

// Open modal manually
openModalBtn.addEventListener("click", openModal);

// Close using the close button
closeModalBtn.addEventListener("click", closeModal);

// Close when clicking outside the modal
modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Close with the Escape key
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        modalOverlay.classList.contains("active")
    ) {
        closeModal();
    }
});

// Handle newsletter signup
newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.className = "message error";
        return;
    }

    message.textContent = "Successfully subscribed! 🎉";
    message.className = "message success";

    newsletterForm.reset();

    // Close modal after successful submission
    setTimeout(() => {
        closeModal();
        message.textContent = "";
        message.className = "message";
    }, 2000);
});
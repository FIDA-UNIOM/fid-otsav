// Get modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const caption = document.getElementById("caption");

// Get all gallery items and add click event
document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
        modal.style.display = "block";   // Show the modal
        modalImage.src = item.src;       // Set modal image to clicked image
        caption.innerText = item.alt;    // Set caption to image alt text
    });
});

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function openTab(tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content and set tab to active
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}





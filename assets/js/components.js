// Function to load components
function loadComponents() {
    // Load header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            // Initialize Feather Icons after loading the header
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            // Initialize Feather Icons in the footer
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadComponents);

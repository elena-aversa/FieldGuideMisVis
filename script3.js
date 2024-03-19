document.addEventListener("DOMContentLoaded", function() {
    // Function to make SVG images clickable
    function makeClickable() {
        var images = document.querySelectorAll('svg image[data-url]');
        images.forEach(function(img) {
            img.style.cursor = 'pointer'; // Change cursor on hover
            img.addEventListener('click', function() {
                var url = img.getAttribute('data-url'); // Get the URL
                window.open(url, '_blank'); // Open the URL in a new tab
            });
        });
    }

    makeClickable();
});


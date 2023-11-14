document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader when the page content is fully loaded
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 1000); // Adjust the time as needed (in milliseconds)
});

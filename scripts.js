<script>
    // Existing search function
    function searchFunction() {
        const query = document.getElementById('search-bar').value.toLowerCase();
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = `Searching for "${query}"... (Feature in development)`;
    }

    // New hamburger menu toggle function
    function toggleMenu() {
        const navMenu = document.querySelector('.nav-buttons');
        navMenu.classList.toggle('active');  // Toggle the "active" class to show/hide the navigation menu
    }
</script>

document.addEventListener('DOMContentLoaded', function() {
    // SECTION 1: Redirect to explore.html with search query on Enter key press
    const searchInput = document.getElementById('search');
    
    // Function to handle Enter key press in search input
    function handleEnterKeyPress(event) {
        if (event.key === 'Enter') {
            const searchQuery = searchInput.value;
            window.location.href = `/content/explore.html?search=${encodeURIComponent(searchQuery)}`;
        }
    }

    // Add event listener for Enter key press
    searchInput.addEventListener('keypress', handleEnterKeyPress);

    // SECTION 2: Filter jobs on explore.html based on search query
    // Function to update the no results message
    function updateNoResultsMessage() {
        const visiblePosts = Array.from(jobPostings).filter(post => post.style.display !== 'none');
        if (visiblePosts.length === 0) {
            noResultsMessage.textContent = 'No results found for: ' + searchInput.value;
            noResultsMessage.style.display = '';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    // Function to filter job postings
    function filterJobs() {
        const searchText = searchInput.value.toLowerCase();
        jobPostings.forEach(post => {
            const title = post.querySelector('.title').textContent.toLowerCase();
            const description = post.querySelector('.description').textContent.toLowerCase();
            const isVisible = title.includes(searchText) || description.includes(searchText);
    
            post.style.display = isVisible ? 'flex' : 'none';
        });
        updateNoResultsMessage();
    }

    // Try to get job postings, no results message element, and sort options (if on explore.html)
    const jobPostings = document.querySelectorAll('.job-posting');
    const noResultsMessage = document.getElementById('no-results-message');
    const sortOptions = document.getElementById('sort-options');

    // SECTION 3: Sort job postings based on selected option
    function sortJobPostings() {
        const sortOrder = sortOptions.value;
        let sortedJobs = Array.from(jobPostings);

        if (sortOrder === 'highest') {
            sortedJobs.sort((a, b) => {
                const prizeA = parseInt(a.querySelector('.prize').textContent.replace('€', '').trim());
                const prizeB = parseInt(b.querySelector('.prize').textContent.replace('€', '').trim());
                return prizeB - prizeA; // For descending order
            });
        } else if (sortOrder === 'lowest') {
            sortedJobs.sort((a, b) => {
                const prizeA = parseInt(a.querySelector('.prize').textContent.replace('€', '').trim());
                const prizeB = parseInt(b.querySelector('.prize').textContent.replace('€', '').trim());
                return prizeA - prizeB; // For ascending order
            });
        }

        // Append sorted job postings back to the DOM
        const parent = jobPostings[0].parentNode;
        sortedJobs.forEach(post => parent.appendChild(post));
    }

    if (jobPostings.length > 0 && noResultsMessage) {
        // We are on explore.html, handle search query filtering
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            searchInput.value = searchQuery;
            filterJobs(); // Call the filter function to filter results based on query
        }

        // Add event listener for search input keyup to filter jobs
        searchInput.addEventListener('keyup', filterJobs);
    }

    if (sortOptions) {
        // Add event listener for sort option change
        sortOptions.addEventListener('change', sortJobPostings);
    }
});

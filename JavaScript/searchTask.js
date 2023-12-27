document.addEventListener('DOMContentLoaded', function() {
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
            post.style.display = isVisible ? '' : 'none';
        });
        updateNoResultsMessage();
    }

    // Get the search input element, job postings, and no results message element
    const searchInput = document.getElementById('search');
    const jobPostings = document.querySelectorAll('.job-posting');
    const noResultsMessage = document.getElementById('no-results-message');

    // Event listener for search input
    searchInput.addEventListener('keyup', filterJobs);
});
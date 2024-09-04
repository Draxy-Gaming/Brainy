  // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer to reveal course sections on scroll
    const courses = document.querySelectorAll('.course');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    courses.forEach(course => {
        observer.observe(course);
        
        
    });// Select all expandable items
// Select all expandable items
const expandableItems = document.querySelectorAll('.expandable-item');

expandableItems.forEach(item => {
    // Add a click event listener to each item
    item.addEventListener('click', () => {
        // Collapse all other items
        expandableItems.forEach(otherItem => {
            const otherDetails = otherItem.querySelector('.details');
            if (otherDetails !== item.querySelector('.details')) {
                otherDetails.style.maxHeight = null;
            }
        });

        // Toggle the clicked item's details
        const details = item.querySelector('.details');
        if (details.style.maxHeight) {
            details.style.maxHeight = null; // Collapse the current item
        } else {
            details.style.maxHeight = details.scrollHeight + "px"; // Expand the current item
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the screen
                entry.target.classList.add('fade-in-up');
                
                // Stop observing it so the animation only happens once per page load
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    // Automatically find all sections and cards, hide them, and observe them
    const elementsToAnimate = document.querySelectorAll('section, .news-card, .officer-card, .project-card, .merch-item');
    
    elementsToAnimate.forEach((el) => {
        el.classList.add('hidden-state');
        observer.observe(el);
    });
});

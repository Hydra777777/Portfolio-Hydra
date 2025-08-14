// Add 'animate' class to sections when they enter the viewport
document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = document.querySelectorAll("main section, .project, .service-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedSections.forEach(section => {
        section.classList.add("pre-animate");
        observer.observe(section);
    });
});


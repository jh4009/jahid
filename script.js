// script.js

document.addEventListener('DOMContentLoaded', function() {
    const jobTitle = document.getElementById('job-title');
    const titles = ['Frontend Developer', 'Engineer'];
    let currentTitleIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 150; // Slower typing speed

    function typeWriter() {
        const fullText = titles[currentTitleIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1); // Delete characters
        } else {
            currentText = fullText.substring(0, currentText.length + 1); // Add characters
        }

        jobTitle.textContent = currentText;

        // Slower typing speed for adding text, faster for deleting text
        let speed = isDeleting ? typingSpeed / 2 : typingSpeed;

        // When full text is typed
        if (!isDeleting && currentText === fullText) {
            speed = 2000; // Pause for 2 seconds before starting to delete
            isDeleting = true;
        }
        // When text is fully deleted
        else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length; // Move to the next title
            speed = 500; // Slight pause before typing the next title
        }

        setTimeout(typeWriter, speed);
    }

    // Start the typing effect
    typeWriter();
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelectorAll('section, nav, footer'); // Select all major sections

    content.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible'); // Apply the visible class to trigger animation
        }, 200 * index); // Delay each section a bit for a staggered effect
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });

    // Animate circle progress
    const circles = document.querySelectorAll('.circle-progress');
    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const degree = (percentage / 100) * 360;
        const halfCircle = circle.querySelector('::after');

        // Animation logic for circles
        if (percentage <= 50) {
            circle.style.clipPath = 'inset(0 50% 0 0)';
        } else {
            circle.style.clipPath = 'inset(0 0 0 50%)';
        }

        // Apply rotation
        circle.style.setProperty('--degree', degree + 'deg');
    });
});
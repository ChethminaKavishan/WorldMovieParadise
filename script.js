
document.addEventListener("DOMContentLoaded", function() {
    const box = document.querySelector('.animated-box');
    
    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = '#bb86fc';
    });

    box.addEventListener('mouseout', function() {
        box.style.backgroundColor = '#03dac6';
    });
});

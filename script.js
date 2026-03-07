console.log("Script loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    const form = document.getElementById('jobForm');
    const popup = document.getElementById('popup');
    
    if (form) {
        console.log("Form found, adding submit listener");
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Form submitted - SHOWING PRANK!");
            
            // Show popup
            if (popup) {
                popup.style.display = 'block';
                
                // Try to play video
                const video = document.getElementById('prankVideo');
                if (video) {
                    video.play().catch(e => console.log("Autoplay error:", e));
                }
            }
        });
    } else {
        console.log("Form not found!");
    }
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    const video = document.getElementById('prankVideo');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded - script ready");
    
    // Company name from URL
    const params = new URLSearchParams(window.location.search);
    const company = params.get('company') || 'DreamCorp';
    document.getElementById('pageTitle').textContent = `${company}.com - Careers`;
    document.getElementById('companyHeader').textContent = `🎉 ${company}.com - Exclusive Job Opportunity! 🎉`;
    document.getElementById('companyDesc').textContent = `Apply now at ${company}—Python/Java roles, high LPA!`;

    // Form submit - ONLY after page loads
    const form = document.getElementById('jobForm');
    form.addEventListener('submit', function(e) {
        console.log("🎉 SUBMIT CLICKED!");
        e.preventDefault();
        
        // Log prank data
        const formData = Object.fromEntries(new FormData(form));
        console.log('😂 PRANK DATA:', formData);
        
        // Show video popup
        document.getElementById('popup').style.display = 'block';
        document.getElementById('prankVideo').play();
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

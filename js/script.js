// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Company name from URL
    const params = new URLSearchParams(window.location.search);
    const company = params.get('company') || 'DreamCorp';
    document.getElementById('pageTitle').textContent = `${company}.com - Careers`;
    document.getElementById('companyHeader').textContent = `🎉 ${company}.com - Exclusive Job Opportunity! 🎉`;
    document.getElementById('companyDesc').textContent = `Apply now at ${company}—Python/Java roles, high LPA!`;

    // Form submit handler
    const form = document.getElementById('jobForm');
    console.log('Form found:', form); // Debug
    
    form.addEventListener('submit', function(e) {
        console.log('SUBMIT TRIGGERED!'); // Debug
        e.preventDefault();
        
        const formData = Object.fromEntries(new FormData(e.target));
        console.log('😂 PRANK DATA:', formData);
        
        document.getElementById('popup').style.display = 'block';
        console.log('Popup should show now');
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

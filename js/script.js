// Company name from URL
const params = new URLSearchParams(window.location.search);
const company = params.get('company') || 'DreamCorp';
document.getElementById('pageTitle').textContent = `${company}.com - Careers`;
document.getElementById('companyHeader').textContent = `🎉 ${company}.com - Exclusive Job Opportunity! 🎉`;
document.getElementById('companyDesc').textContent = `Apply now at ${company}—Python/Java roles, high LPA!`;

// ONLY SHOW POPUP ON FORM SUBMIT
document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault(); // STOP FORM
    
    // Show what they entered (check browser console F12)
    const formData = Object.fromEntries(new FormData(e.target));
    console.log('😂 PRANK VICTIM DATA:', formData);
    
    // SHOW VIDEO POPUP
    document.getElementById('popup').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Dynamic company name
const params = new URLSearchParams(window.location.search);
const company = params.get('company') || 'DreamCorp';
document.getElementById('pageTitle').textContent = `${company}.com - Careers`;
document.getElementById('companyHeader').textContent = `🎉 ${company}.com - Exclusive Job Opportunity! 🎉`;
document.getElementById('companyDesc').textContent = `Apply now at ${company}—Python/Java roles, high LPA!`;

// FORM SUBMIT - ONLY SHOW POPUP HERE
const form = document.getElementById('jobForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();  // STOP FORM SUBMIT
    
    // Log form data (you see this in browser console)
    const formData = Object.fromEntries(new FormData(form));
    console.log('🎉 PRANK DATA:', formData);
    
    // SHOW POPUP ONLY AFTER SUBMIT
    document.getElementById('popup').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

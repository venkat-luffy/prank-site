// Dynamic company from URL parameter
const params = new URLSearchParams(window.location.search);
const company = params.get('company') || 'DreamCorp';

// Update page elements
document.getElementById('pageTitle').textContent = `${company}.com - Careers`;
document.getElementById('companyHeader').textContent = `🎉 ${company}.com - Exclusive Job Opportunity! 🎉`;
document.getElementById('companyDesc').textContent = `Apply now at ${company}—Python/Java roles, high LPA!`;

// Form submit triggers prank
document.getElementById('jobForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Prank data collected:', Object.fromEntries(new FormData(e.target)));
    document.getElementById('popup').style.display = 'block';
    //document.getElementById('prankVideo').play();
});

// Close popup function
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

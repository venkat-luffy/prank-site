console.log("🎯 Prank Script Loaded!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM fully loaded");
    
    const form = document.getElementById('jobForm');
    const popup = document.getElementById('popup');
    const video = document.getElementById('prankVideo');
    
    // Remove muted attribute
    if (video) {
        video.muted = false;
    }
    
    if (form) {
        console.log("✅ Form found");
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get selected companies
            const selectedCompanies = [];
            document.querySelectorAll('input[name="companies"]:checked').forEach(cb => {
                selectedCompanies.push(cb.value);
            });
            
            // Validate at least one company selected
            if (selectedCompanies.length === 0) {
                alert("❌ Please select at least one company to apply!");
                return;
            }
            
            console.log("🎯 PRANK TIME! Victim data:", {
                companies: selectedCompanies,
                fullname: form.fullname?.value,
                rollno: form.rollno?.value,
                cgpa: form.cgpa?.value,
                jobrole: form.jobrole?.value,
                lpa: form.lpa?.value
            });
            
            // Show custom message based on selection
            let companyMessage = "";
            if (selectedCompanies.length === 1) {
                companyMessage = `Applied to ${selectedCompanies[0]}!`;
            } else {
                companyMessage = `Applied to ${selectedCompanies.length} companies: ${selectedCompanies.join(' + ')}!`;
            }
            
            console.log(`📝 ${companyMessage}`);
            
            // Show popup with video
            if (popup) {
                popup.style.display = 'block';
                console.log("✅ Popup displayed");
                
                if (video) {
                    video.play()
                        .then(() => console.log("✅ Video playing with sound"))
                        .catch(error => {
                            console.log("⚠️ Autoplay issue:", error);
                            video.controls = true;
                            video.muted = true;
                            video.play();
                            alert("🔊 Click the video to unmute and enjoy!");
                        });
                }
            }
        });
    }
});

function closePopup() {
    const popup = document.getElementById('popup');
    const video = document.getElementById('prankVideo');
    
    if (popup) {
        popup.style.display = 'none';
    }
    
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}
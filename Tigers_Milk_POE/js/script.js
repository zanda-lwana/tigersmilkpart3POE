document.addEventListener("DOMContentLoaded", function () {
    // ==========================================
    // 1. GALLERY LIGHTBOX FEATURE
    // ==========================================
    const galleryItems = document.querySelectorAll(".gallery-item img");
    
    if (galleryItems.length > 0) {
        // Create lightbox container dynamically
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.cssText = "display:none; position:fixed; z-index:9999; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); justify-content:center; align-items:center; cursor:pointer;";
        
        const lightboxImg = document.createElement("img");
        lightboxImg.style.cssText = "max-width:90%; max-height:90%; border:3px solid #f47b20; box-shadow:0 0 20px rgba(0,0,0,0.5);";
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        galleryItems.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightbox.style.display = "flex";
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }

    // ==========================================
    // 2. DYNAMIC MENU SEARCH & FILTER FEATURE
    // ==========================================
    const searchInput = document.getElementById("menuSearch");
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const term = e.target.value.toLowerCase().trim();
            const categories = document.querySelectorAll(".menu-category");

            categories.forEach(cat => {
                const text = cat.textContent.toLowerCase();
                if (text.includes(term)) {
                    cat.style.display = "block";
                } else {
                    cat.style.display = "none";
                }
            });
        });
    }

    // ==========================================
    // 3. FORM VALIDATION (ENQUIRY & CONTACT)
    // ==========================================
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const phone = document.getElementById("phone").value.trim();
            const name = document.getElementById("name").value.trim();
            
            if (phone.length < 10) {
                alert("Validation Error: Please enter a valid phone number with at least 10 digits.");
                return;
            }
            
            alert(`Thank you, ${name}! Your table booking enquiry for Tiger's Milk Moffett on Main has been successfully submitted.`);
            bookingForm.reset();
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("cemail").value.trim();
            
            if (!email.includes("@") || !email.includes(".")) {
                alert("Validation Error: Please provide a valid email address.");
                return;
            }

            alert("Thank you for your message! Our team at Moffett on Main will review your enquiry and respond shortly.");
            contactForm.reset();
        });
    }
});
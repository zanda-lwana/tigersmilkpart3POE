document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const contactForm = document.getElementById("contactForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const phone = document.getElementById("phone").value;
            if (phone.length < 10) {
                alert("Please enter a valid phone number with at least 10 digits.");
                return;
            }
            alert("Thank you! Your table booking enquiry has been submitted successfully.");
            bookingForm.reset();
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }
});
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const formError = document.getElementById("formError");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop page reload

    const formData = new FormData(contactForm);

    // extra info
    formData.append("website", window.location.href);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
            formSuccess.style.display = "block";
            formError.style.display = "none";
            contactForm.reset(); // clear form
        } else {
            formError.style.display = "block";
            formSuccess.style.display = "none";
        }
    } catch (error) {
        formError.style.display = "block";
        formSuccess.style.display = "none";
    }
});
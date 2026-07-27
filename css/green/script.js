// 1. Prevent search form from reloading the page
const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

if (searchButton) {
    searchButton.addEventListener("click", function (e) {
        e.preventDefault();
        const userSearch = searchInput.value.trim();
        if (userSearch) {
            alert("You searched for: " + userSearch);
            searchInput.value = "";
        }
    });
}

// 2. Active nav link highlight
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
        link.style.color= "yellow";
    }
});

// 3. Scroll-to-top button
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    if (scrollBtn) scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
if (scrollBtn) scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// 4. Contact form validation (only runs on contact page)
const contactForm = document.querySelector(".contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in your name, email, and message.");
            return;
        }
        alert("Message sent! Thank you, " + name + " 🌿");
        contactForm.reset();
    });
}

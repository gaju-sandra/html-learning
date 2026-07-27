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
        link.style.color="yellow";
    }
});

// 3. Scroll-to-top button
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    if (scrollBtn) scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
if (scrollBtn) scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// 4. Populate worldwide countries
const countrySelect = document.getElementById("country");
if (countrySelect) {
    const countries = [
        "Select your country",
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Belarus",
        "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
        "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
        "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile",
        "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominican Republic", "Ecuador", "Egypt",
        "El Salvador", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
        "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Guatemala",
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
        "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
        "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
        "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
        "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia",
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa",
        "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
        "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
        "Democratic Republic of the Congo"
    ];

    countries.forEach((country, index) => {
        const option = document.createElement("option");
        option.value = index === 0 ? "" : country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

// 5. Helper functions for validation
function showError(id, message) {
    const span = document.getElementById(id);
    const input = document.getElementById(id.replace("Error", ""));
    if (span) span.textContent = message;
    if (input) input.classList.add("input-error");
}

function clearError(id) {
    const span = document.getElementById(id);
    const input = document.getElementById(id.replace("Error", ""));
    if (span) span.textContent = "";
    if (input) input.classList.remove("input-error");
}

// 6. Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const country = document.getElementById("country").value;
        const gender = document.querySelector("input[name='gender']:checked");
        const message = document.getElementById("message").value.trim();

        let valid = true;

        // Clear all errors first
        ["name", "email", "password", "country", "gender", "message"].forEach(f => clearError(f + "Error"));

        // Name: required, no numbers or special characters
        if (!name) {
            showError("nameError", "Full name is required.");
            valid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            showError("nameError", "Name must contain letters only.");
            valid = false;
        }

        // Email: required, valid format
        if (!email) {
            showError("emailError", "Email address is required.");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("emailError", "Enter a valid email (e.g. name@example.com).");
            valid = false;
        }

        // Password: required, min 8 chars, at least one number
        if (!password) {
            showError("passwordError", "Password is required.");
            valid = false;
        } else if (password.length < 8) {
            showError("passwordError", "Password must be at least 8 characters.");
            valid = false;
        } else if (!/\d/.test(password)) {
            showError("passwordError", "Password must contain at least one number.");
            valid = false;
        }

        // Country: must select one
        if (!country) {
            showError("countryError", "Please select your country.");
            valid = false;
        }

        // Gender: must select one
        if (!gender) {
            showError("genderError", "Please select your gender.");
            valid = false;
        }

        // Message: required, min 10 characters
        

        if (valid) {
            alert("Message sent! Thank you, " + name );
            contactForm.reset();
        }
    });
}

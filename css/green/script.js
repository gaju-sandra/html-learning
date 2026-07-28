// =============================================
// 1. SEARCH FUNCTIONALITY
// =============================================

// Get the search button element from the HTML using its id
const searchButton = document.getElementById("searchBtn");

// Get the search input field from the HTML using its id
const searchInput = document.getElementById("search");

// Only run this code if the search button exists on the current page
if (searchButton) {

    // Listen for a click event on the search button
    searchButton.addEventListener("click", function (e) {

        // Prevent the form from submitting and reloading the page
        e.preventDefault();

        // Get what the user typed and remove extra spaces from both ends
        const userSearch = searchInput.value.trim();

        // Only show the alert if the user actually typed something
        if (userSearch) {
            alert("You searched for: " + userSearch);

            // Clear the input field after searching
            searchInput.value = "";
        }
    });
}

// =============================================
// 2. ACTIVE NAV LINK HIGHLIGHT
// =============================================

// Select all anchor tags inside the nav
const navLinks = document.querySelectorAll("nav a");

// Loop through each nav link
navLinks.forEach(link => {

    // Check if the link's href matches the current page filename
    // location.pathname.split("/").pop() gets the current page name e.g. "index.html"
    if (link.href.includes(location.pathname.split("/").pop())) {

        // Make the current page link bold so the user knows which page they are on
        link.style.fontWeight = "bold";

        // Underline the current page link
        link.style.textDecoration = "underline";

        // Change the color to yellow to make it stand out
        link.style.color = "yellow";
    }
});

// =============================================
// 3. SCROLL-TO-TOP BUTTON
// =============================================

// Get the scroll-to-top button from the HTML
const scrollBtn = document.getElementById("scrollTop");

// Listen for the user scrolling on the page
window.addEventListener("scroll", () => {

    // If the button exists, show it after scrolling 300px down, hide it otherwise
    if (scrollBtn) scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// When the scroll button is clicked, smoothly scroll back to the very top of the page
if (scrollBtn) scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// =============================================
// 4. POPULATE WORLDWIDE COUNTRIES DROPDOWN
// =============================================

// Get the country select dropdown from the HTML
const countrySelect = document.getElementById("country");

// Only run this if the country dropdown exists (i.e. we are on the contact page)
if (countrySelect) {

    // Array of all worldwide countries — first item is the default placeholder
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

    // Loop through each country in the array
    countries.forEach((country, index) => {

        // Create a new <option> element for each country
        const option = document.createElement("option");

        // The first item (index 0) has an empty value so it acts as a placeholder
        // All other countries use their name as the value
        option.value = index === 0 ? "" : country;

        // Set the text that shows in the dropdown
        option.textContent = country;

        // Add the option into the select dropdown in the HTML
        countrySelect.appendChild(option);
    });
}

// =============================================
// 5. HELPER FUNCTIONS FOR SHOWING/CLEARING ERRORS
// =============================================

// This function shows a red error message below a field
// id = the id of the error span e.g. "nameError"
// message = the text to show e.g. "Full name is required."
function showError(id, message) {

    // Find the error span element using the id
    const span = document.getElementById(id);

    // Find the input field by removing "Error" from the id to get the field id
    // e.g. "nameError" becomes "name"
    const input = document.getElementById(id.replace("Error", ""));

    // Set the error message text inside the span
    if (span) span.textContent = message;

    // Add a red border to the input field to highlight it
    if (input) input.classList.add("input-error");
}

// This function clears the error message and removes the red border
function clearError(id) {

    // Find the error span element
    const span = document.getElementById(id);

    // Find the matching input field
    const input = document.getElementById(id.replace("Error", ""));

    // Clear the error message text
    if (span) span.textContent = "";

    // Remove the red border from the input field
    if (input) input.classList.remove("input-error");
}

// =============================================
// 6. CONTACT FORM VALIDATION
// =============================================

// Get the contact form using its id
const contactForm = document.getElementById("contactForm");

// Only run this if the contact form exists on the page
if (contactForm) {

    // Listen for when the user clicks the submit button
    contactForm.addEventListener("submit", function (e) {

        // Prevent the page from reloading on form submit
        e.preventDefault();

        // Get the value from each field and remove extra spaces with trim()
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const country = document.getElementById("country").value;

        // For radio buttons, find whichever one is currently checked
        const gender = document.querySelector("input[name='gender']:checked");
        const message = document.getElementById("message").value.trim();

        // This variable tracks whether the whole form is valid
        // It starts as true and becomes false if any field fails
        let valid = true;

        // Clear all previous error messages before checking again
        ["name", "email", "password", "country", "gender", "message"].forEach(f => clearError(f + "Error"));

        // --- NAME VALIDATION ---
        if (!name) {
            // Field is empty
            showError("nameError", "Full name is required.");
            valid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            // Field contains numbers or special characters
            // The regex ^[a-zA-Z\s]+$ only allows letters and spaces
            showError("nameError", "Name must contain letters only.");
            valid = false;
        }

        // --- EMAIL VALIDATION ---
        if (!email) {
            // Field is empty
            showError("emailError", "Email address is required.");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            // The regex checks for a basic valid email format like name@example.com
            showError("emailError", "Enter a valid email (e.g. name@example.com).");
            valid = false;
        }

        // --- PASSWORD VALIDATION ---
        if (!password) {
            // Field is empty
            showError("passwordError", "Password is required.");
            valid = false;
        } else if (password.length < 8) {
            // Password is too short
            showError("passwordError", "Password must be at least 8 characters.");
            valid = false;
        } else if (!/\d/.test(password)) {
            // \d checks if there is at least one digit (number) in the password
            showError("passwordError", "Password must contain at least one number.");
            valid = false;
        }

        // --- COUNTRY VALIDATION ---
        if (!country) {
            // User left the default "Select your country" option which has an empty value
            showError("countryError", "Please select your country.");
            valid = false;
        }

        // --- GENDER VALIDATION ---
        if (!gender) {
            // No radio button was selected
            showError("genderError", "Please select your gender.");
            valid = false;
        }

        // --- MESSAGE VALIDATION ---
        if (!message) {
            // Field is empty
            showError("messageError", "Message is required.");
            valid = false;
        } else if (message.length < 10) {
            // Message is too short to be meaningful
            showError("messageError", "Message must be at least 10 characters.");
            valid = false;
        }

        // If all fields passed validation, show success and reset the form
        if (valid) {
            alert("Message sent! Thank you, " + name);

            // Clear all the form fields back to empty
            contactForm.reset();
        }
    });
}

// 1. SEARCH
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

// 2. ACTIVE NAV LINK
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.href.includes(location.pathname.split("/").pop())) {
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
        link.style.color = "yellow";
    }
});

// 3. SCROLL-TO-TOP
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (scrollBtn) scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

if (scrollBtn) scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// 4. COUNTRIES DROPDOWN
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

// 5. SHOW/CLEAR ERRORS
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

// 6. FORM VALIDATION
const contactForm = document.getElementById("contactForm");


// if() {
//  console.log('HI')
// } else{
//  console.log("hello")
// }

const person = {
    name: 'Gaju',
    age: 21,
    address: {
        city: 'kigali',
        country: 'Rwanda'
    },
    activities:['swimming', 'praying', 'dancing']
}

console.log('my person', person.name);

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

        ["name", "email", "password", "country", "gender", "message"].forEach(f => clearError(f + "Error"));

        if (!name) {
            showError("nameError", "Full name is required.");
            valid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            showError("nameError", "Name must contain letters only.");
            valid = false;
        }

        if (!email) {
            showError("emailError", "Email address is required.");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("emailError", "Enter a valid email (e.g. name@example.com).");
            valid = false;
        }

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

        if (!country) {
            showError("countryError", "Please select your country.");
            valid = false;
        }

        if (!gender) {
            showError("genderError", "Please select your gender.");
            valid = false;
        }

        if (valid) {
            alert("Message sent! " + name + " Thank you!");
            contactForm.reset();
        }
    });
}

// 7. LIGHTBOX
const bigwindow = document.createElement("div");
bigwindow.classList.add("lightbox-bigwindow");

const closeBtn = document.createElement("span");
closeBtn.classList.add("lightbox-close");
closeBtn.textContent = "✕";
bigwindow.appendChild(closeBtn);

document.body.appendChild(bigwindow);

document.querySelectorAll(".trees").forEach(card => {
    card.addEventListener("click", () => {
        const existing = bigwindow.querySelector("img, video");
        if (existing) existing.remove();

        const img = card.querySelector("img");
        const vid = card.querySelector("video source");

        if (img) {
            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigwindow.appendChild(bigImg);
        } else if (vid) {
            const bigVid = document.createElement("video");
            bigVid.controls = true;
            bigVid.autoplay = true;
            const source = document.createElement("source");
            source.src = vid.src;
            source.type = "video/mp4";
            bigVid.appendChild(source);
            bigwindow.appendChild(bigVid);
        }

        bigwindow.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    bigwindow.classList.remove("active");
    const vid = bigwindow.querySelector("video");
    if (vid) vid.pause();
});

bigwindow.addEventListener("click", (e) => {
    if (e.target === bigwindow) {
        bigwindow.classList.remove("active");
        const vid = bigwindow.querySelector("video");
        if (vid) vid.pause();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        bigwindow.classList.remove("active");
        const vid = bigwindow.querySelector("video");
        if (vid) vid.pause();
    }
});

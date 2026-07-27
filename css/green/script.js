const searchButton = document.getElementById("searchBtn");

const searchInput = document.getElementById("search");

const result = document.getElementById("result");

searchButton.addEventListener("click", function () {

    let userSearch = searchInput.value;

    result.textContent = "You searched for: " + userSearch;

});
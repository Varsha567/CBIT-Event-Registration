function loadPage(page) {
    alert("Inline JS is working!");
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html; // Only updates #content
            history.pushState(null, '', page); // Updates URL without reload
        })
        .catch(error => console.error('Error loading page:', error));
}
document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarNav");

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
        });
    }
});


const email = "lucasskold49@gmail.com";

function showSection() {
    document.querySelectorAll("main section").forEach(section => {
        section.style.display = "none";
    });
    const hash = window.location.hash;

    if (hash) {
        const section = document.querySelector(hash);
        if (section) {
            section.style.display = "block";
        }
    } else {
        document.querySelector("#hem").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showSection();
    window.addEventListener("hashchange", showSection);
});
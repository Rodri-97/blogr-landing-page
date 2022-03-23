const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const icons = [hamburgerIcon, closeIcon];
const mobileNav = document.getElementById("mobile-nav");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        hamburgerIcon.classList.toggle("hide");
        closeIcon.classList.toggle("show");
        mobileNav.classList.toggle("show");
    });
});
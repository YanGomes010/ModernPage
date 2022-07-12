var btnClose = document.querySelector(".btn-close");
var btnOpen = document.querySelector(".navbar-toggler-icon");

btnOpen.addEventListener("click", () => {
    btnOpen.style.display = "none";
})

btnClose.addEventListener("click", () => {
    btnOpen.style.display = "block";
})
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");
const closeButton = document.getElementById("closeButton");

navbarToggle.addEventListener("click", () => {
  if(window.innerWidth <= 1023){
    navbarMenu.classList.toggle("show");
    navbarToggle.style.display = 'none';
    closeButton.style.display = 'block';
  }
});



closeButton.addEventListener("click", () => {
  navbarMenu.classList.remove("show");
  navbarToggle.style.display = 'block';
  closeButton.style.display = 'none';
});


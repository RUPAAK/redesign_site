const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const body = document.body;
const nav_link = document.getElementsByClassName("nav_link");
const contact_link = document.getElementsByClassName("contact_link");


moon.addEventListener("click", () => {
  body.classList.add("darkMode");
  sun.style.display = "block";
  moon.style.display = "none";
  body.style.background = "rgb(51, 48, 48)";
  body.style.color = "#fff";
  sun.style.color = "gold";
  for (let a = 0; a < nav_link.length; a++) {
    nav_link[a].style.color = "#fff";
  }
  for (let a = 0; a < contact_link.length; a++) {
    contact_link[a].style.color = "#fff";
  }
});
sun.addEventListener("click", () => {
  body.classList.add("lightMode");
  moon.style.display = "block";
  sun.style.display = "none";
  body.style.background = "";
  body.style.color = "";
  for (let a = 0; a < nav_link.length; a++) {
    nav_link[a].style.color = "";
  }
  for (let a = 0; a < contact_link.length; a++) {
    contact_link[a].style.color = "";
  }
});

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const body = document.body;
const nav_link = document.getElementsByClassName("nav_link");

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
});
sun.addEventListener("click", () => {
  setTimeout(() => {
    body.classList.add("lightMode");
  }, 1500);
  moon.style.display = "block";
  sun.style.display = "none";
  body.style.background = "";
  body.style.color = "";
  for (let a = 0; a < nav_link.length; a++) {
    nav_link[a].style.color = "";
  }
});

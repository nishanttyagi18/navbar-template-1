const btn = document.getElementById("btn");
const list = document.getElementById("nav-list");

btn.addEventListener("click", (e) => {
  if (!list.classList.contains("hidden")) {
    list.classList.add("hidden");
  } else {
    list.classList.remove("hidden");
  }
});

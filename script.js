els = document.querySelectorAll(".card-img");

document.addEventListener("DOMContentLoaded", () => {
  for (let el of els) {
    new Viewer(el, { navbar: false, toolbar: false });
  }
});

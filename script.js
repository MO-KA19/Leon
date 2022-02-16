let menu = document.querySelector("#burgerm")
let cross = document.querySelector("#cross")
let ul = document.querySelector(".header ul")
let logo = document.querySelector(".logo")
let landing = document.querySelector(".landing")

menu.onclick = function () {
    console.log(true);
    ul.style.display = "block"
    menu.style.display = 'none'
    cross.style.display = "block"
    logo.style.position = 'relative'
    logo.style.bottom = "120px"
    landing.style.top = "-250px"
}


cross.onclick = function () {
    console.log(true);
    ul.style.display = "none"
    menu.style.display = 'block'
    cross.style.display = "none"
    logo.style.position = 'relative'
    logo.style.bottom = "10px"
    landing.style.top = "0px"
}




let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }

  this.scrollY >= 700 ? span.classList.add("show") : span.classList.remove("show");
};


span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
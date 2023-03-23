const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const filenames = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png"];

/* Declaring the alternative text for each image file */
const altText = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Looping through images */
filenames.forEach((items, index) => {
  console.log(items, index);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `/img/${items}`);
  newImage.setAttribute("alt", altText[index]);
  newImage.setAttribute("width", "128");
  newImage.setAttribute("height", "96");
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", `/img/${items}`);
  });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

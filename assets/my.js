console.log("my.js is attached 🤢");

let secTitle = document.title;
console.log("secTitle: ", secTitle);
console.log("innerWidth: ", innerWidth);
  if (
    innerWidth >= 999 &&
    (secTitle === "CCFD – Fire Apes F.D." ||
    secTitle === "CCFD Short Sleeve Duty Shirt – Fire Apes F.D.")
  ) {
    console.log("1secTitle: ", secTitle);
    document.querySelector(".image-container > img").classList.add("topper-97");
  };

  if (secTitle=== "Contact – Fire Apes F.D.") {
    document.querySelector(".image-container > img").classList.add("topper-150");
  }


// meet the krew modal
const images = document.querySelectorAll(".krew");
let imgSrc;
// get images src onclick
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
  });
});
//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector("#MainContent").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
  };
  modal.append(newImage, closeBtn);
};
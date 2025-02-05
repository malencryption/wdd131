const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
  const selectedImg = event.target;

	// get the src attribute from that element and 'split' it on the "-"
  let imgSrc = selectedImg.src.split("-")

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  let fullSizeImgSrc = `${imgSrc[0]}-full.jpeg`
	
  // insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSizeImgSrc, "full size image"))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  const closeBtn = document.querySelector(".close-viewer")
  closeBtn.addEventListener("click", closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer")
  viewer.remove()
}

gallery.addEventListener("click", viewHandler);
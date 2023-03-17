
// Get the canvas element and the 2D context
var canvas = document.getElementById("avatar-canvas");
var ctx = canvas.getContext("2d");

// Draw the avatar layers in the correct order
ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
ctx.drawImage(clothesImage, 0, 0, canvas.width, canvas.height);
ctx.drawImage(skinImage, 0, 0, canvas.width, canvas.height);
ctx.drawImage(hairImage, 0, 0, canvas.width, canvas.height);
ctx.drawImage(accessoriesImage, 0, 0, canvas.width, canvas.height);

// Add event listener to download button
var downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", function() {
  // Convert the canvas to a data URL and download the image
  var dataURL = canvas.toDataURL("image/png");
  downloadBtn.href = dataURL;
  downloadBtn.download = "avatar.png";
});


// Get all the avatar component elements
const avatarFace = document.querySelector('.avatar-face img');
const avatarHair = document.querySelector('.avatar-hair img');
const avatarEyes = document.querySelector('.avatar-eyes img');
const avatarMouth = document.querySelector('.avatar-mouth img');
const avatarClothes = document.querySelector('.avatar-clothes img');
const avatarAccessories = document.querySelector('.avatar-accessories img');

// Define arrays for each avatar component type
const faces = ['face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png', 'face6.png'];
const hairs = ['hair1.png', 'hair2.png', 'hair3.png', 'hair4.png', 'hair5.png', 'hair6.png'];
const eyes = ['eyes1.png', 'eyes2.png', 'eyes3.png', 'eyes4.png', 'eyes5.png', 'eyes6.png'];
const mouths = ['mouth1.png', 'mouth2.png', 'mouth3.png', 'mouth4.png', 'mouth5.png', 'mouth6.png];
const clothes = ['clothes1.png', 'clothes2.png', 'clothes3.png', 'clothes4.png', 'clothes5.png', 'clothes6.png'];
const accessories = ['accessories1.png', 'accessories2.png', 'accessories3.png', 'accessories4.png', 'accessories5.png', 'accessories6.png'];

// Set up event listeners for each avatar component type
avatarFace.addEventListener('click', changeFace);
avatarHair.addEventListener('click', changeHair);
avatarEyes.addEventListener('click', changeEyes);
avatarMouth.addEventListener('click', changeMouth);
avatarClothes.addEventListener('click', changeClothes);
avatarAccessories.addEventListener('click', changeAccessories);

// Function to change the avatar face
function changeFace() {
  const randomFace = faces[Math.floor(Math.random() * faces.length)];
  avatarFace.src = 'images/face/' + randomFace;
}

// Function to change the avatar hair
function changeHair() {
  const randomHair = hairs[Math.floor(Math.random() * hairs.length)];
  avatarHair.src = 'images/hair/' + randomHair;
}

// Function to change the avatar eyes
function changeEyes() {
  const randomEyes = eyes[Math.floor(Math.random() * eyes.length)];
  avatarEyes.src = 'images/eyes/' + randomEyes;
}

// Function to change the avatar mouth
function changeMouth() {
  const randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
  avatarMouth.src = 'images/mouth/' + randomMouth;
}

// Function to change the avatar clothes
function changeClothes() {
  const randomClothes = clothes[Math.floor(Math.random() * clothes.length)];
  avatarClothes.src = 'images/clothes/' + randomClothes;
}

// Function to change the avatar accessories
function changeAccessories() {
  const randomAccessories = accessories[Math.floor(Math.random() * accessories.length)];
  avatarAccessories.src = 'images/accessories/' + randomAccessories;
}

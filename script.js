
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

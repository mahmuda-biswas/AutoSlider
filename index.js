var MyImg = [
  "img/1.webp",
  "img/2.webp",
  "img/3.webp",
  "img/4.webp",
  "img/5.webp",
  "img/6.webp",
];
var img = document.getElementById("img");

var myIndex = -1;

function myImgSlider() {
  myIndex++;
  if (myIndex >= MyImg.length) {
    myIndex = 0;
    img.src = MyImg[myIndex];
  } else {
    img.src = MyImg[myIndex];
  }
  setTimeout("myImgSlider()", 2000);
}
window.onload = myImgSlider();

// var myIndex = 0;

// function myImgSlider() {
//   myIndex++;
//   if (myIndex >= MyImg.length) {
//     myIndex = 0;
//     img.src = MyImg[myIndex];
//   } else {
//     img.src = MyImg[myIndex];
//   }
//   setTimeout("myImgSlider()", 1000);
// }
// window.onload = myImgSlider();

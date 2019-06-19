'use strict';

// Globals variables first steps to get to next steps to connect my images that shows on my page using the id

var leftPhotoImageTag = document.getElementById('left_photo_img');
var middlePhotoImageTag = document.getElementById('middle_photo_img');
var rightPhotoImageTag = document.getElementById('right_photo_img');
var productsContainer = document.getElementById('allProducts');
var clickContainer = document.getElementById('results');//used in other file

//this variable also globals which let how many times is clicked and default count when we open the page
var clickCount = 0;
var maxClicks = 25;

//creating constructor for the new object The value of this when name, url, timesClicked, and will become the new object  when is created
var PhotoPicture = function (name, imageSrc = 'default.jpg', timesClicked, timesShown) {
  this.name = name;
  this.url = imageSrc;
  this.timesClicked = timesClicked ? timesClicked : 0;
  this.timesShown = timesShown || 0;
  PhotoPicture.allImages.push(this);
};

PhotoPicture.allImages = [];
PhotoPicture.previousImages = [];

//build our Product/images or data
var buildProducts = function(){
  new PhotoPicture('Bag', './img/bag.jpg');
  new PhotoPicture('banana', './img/banana.jpg');
  new PhotoPicture('bathroom', './img/bathroom.jpg');
  new PhotoPicture('boots', './img/boots.jpg');
  new PhotoPicture('breakfast', './img/breakfast.jpg');
  new PhotoPicture('bubblegum', './img/bubblegum.jpg');
  new PhotoPicture('chair', './img/chair.jpg');
  new PhotoPicture('cthuihu', './img/cthulhu.jpg');
  new PhotoPicture('dog-duck', './img/dog-duck.jpg');
  new PhotoPicture('dragon', './img/dragon.jpg');
  new PhotoPicture('pen', './img/pen.jpg');
  new PhotoPicture('pet-sweep', './img/pet-sweep.jpg');
  new PhotoPicture('scissors', './img/scissors.jpg');
  new PhotoPicture('shark', './img/shark.jpg');
  new PhotoPicture('sweep', './img/sweep.png');
  new PhotoPicture('tauntaun', './img/tauntaun.jpg');
  new PhotoPicture('unicorn', './img/unicorn.jpg');
  new PhotoPicture('usb', './img/usb.gif');
  new PhotoPicture('water-can', './img/water-can.jpg');
  new PhotoPicture('wine-glass', './img/wine-glass.jpg');
};

//this will give us the randome min, and max?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pickUniqueNonReporting = function(currentPicks) {
  var index, product;
  do {
    index = getRandomIntInclusive(0, PhotoPicture.allImages.length - 1);
    product = PhotoPicture.allImages[index];
  } while (PhotoPicture.previousImages.includes(product) || currentPicks.includes(product));
  return product;
};

///My function for render
var renderNewPhoto = function() {
  var currentPicks = [];
  var leftProduct = pickUniqueNonReporting(currentPicks);
  currentPicks.push(leftProduct);
  //console.log(leftProduct);
  var middleProduct = pickUniqueNonReporting(currentPicks);
  //console.log(middleProduct);
  currentPicks.push(middleProduct);
  var rightProduct = pickUniqueNonReporting(currentPicks);
  currentPicks.push(rightProduct);

  leftPhotoImageTag.setAttribute('src', leftProduct.url);
  rightPhotoImageTag.setAttribute('src', rightProduct.url);
  middlePhotoImageTag.setAttribute('src', middleProduct.url);
  PhotoPicture.previousImages = currentPicks;
};

var handleClickOnPhoto = function(event){
  clickCount++;
  console.log(event.target.id);

  if(event.target.id === 'left_photo_img'){
    PhotoPicture.previousImages[0].timesClicked++;
  }
  if (event.target.id === 'middle_photo_img'){
    PhotoPicture.previousImages[1].timesClicked++;
  }
  if (event.target.id === 'right_photo_img'){
    PhotoPicture.previousImages[2].timesClicked++;
  }
  for(var i = 0; i < PhotoPicture.previousImages.length; i++){
    PhotoPicture.previousImages[i].timesShown++;
  }
  if(clickCount < maxClicks){
    renderNewPhoto();
  } else {
    productsContainer.removeEventListener('click', handleClickOnPhoto);
    makeBusChart();//used in other file
  }
};


var initPage = function(){
  buildProducts();
  renderNewPhoto();

  productsContainer.addEventListener('click', handleClickOnPhoto);
};

initPage();







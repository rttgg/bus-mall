'use strict';

// Globals
var photoImageSectionTag = document.getElementById('all_photo');
var leftPhotoImageTag = document.getElementById('first_photo_img');
var middlePhotoImageTag = document.getElementById('middle_photo_img');
var rightPhotoImageTag = document.getElementById('last_photo_img');
var clickContainer = document.getElementById('results');


var totalClicks = 0;
var itemsToClick = 25;
var defaultImage = [];
var lastClickedImage = null;


//Variables to store the photos already on the page
//my previous code Roman
// var leftPhotoOnThePage = null;
// var middlePhotoOnThePage = null;
// var rightPhotoOnThePage = null;


///creating constructor
var PhotoPicture = function (name, imageSrc, id) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;
  this.id = id;
  PhotoPicture.allImages.push(this);
};
        
PhotoPicture.allImages = [];

///My function 

var renderNewPhoto = function (leftIndex,middleIndex, rightIndex){
  leftPhotoImageTag.url = PhotoPicture.allImages[leftIndex].url;
  leftPhotoImageTag.id = PhotoPicture.allImages[leftIndex].id;
  middlePhotoImageTag.url = PhotoPicture.allImages[middleIndex].url;
  middlePhotoImageTag.id = PhotoPicture.allImages[middleIndex].id;
  rightPhotoImageTag.url = PhotoPicture.allImages[rightIndex].url;
  rightPhotoImageTag.id = PhotoPicture.allImages[rightIndex].id;
};

var defaultImgLastClicked = function(leftIndex, middleIndex, rightIndex){
  if (defaultImage.length ===0){
    defaultImage.push(PhotoPicture.allImages[leftIndex]);
    defaultImage.push(PhotoPicture.allImages[middleIndex]);
    defaultImage.push(PhotoPicture.allImages[rightIndex]);
  } else {
    lastClickedImage = defaultImage;
    defaultImage = [];
    defaultImage.push(PhotoPicture.allImages[leftIndex]);
    defaultImage.push(PhotoPicture.allImages[middleIndex]);
    defaultImage.push(PhotoPicture.allImages[rightIndex]);
  }
};


// increment amount of clicks
var amountOfTimesShown = function(){
  for (var i =0; i< defaultImage.length; i++){
    defaultImage[i].timesShown++;
  }
};

var numberOfTimesChecked = function(timesChecked){
  var times = false;
  for (var i = 0; i < defaultImage.length; i++){
    if (PhotoPicture.allImages[timesChecked] === defaultImage[i]){
      times = true;
    }
  }
  return times;
};

var pickNewPhoto = function(){
  do { 
    var leftIndex = Math.floor(Math.random() * PhotoPicture.allImages.length);
  } while(numberOfTimesChecked(leftIndex));
        
  do {
    var middleIndex = Math.floor(Math.random() * PhotoPicture.allImages.length);
  } while (middleIndex === leftIndex || numberOfTimesChecked(middleIndex));

  do {
    var rightIndex = Math.floor(Math.random() * PhotoPicture.allImages.length);
  } while (rightIndex === leftIndex || rightIndex === middleIndex || numberOfTimesChecked(rightIndex));
            
        
  renderNewPhoto(leftIndex,middleIndex,rightIndex);
  defaultImgLastClicked(leftIndex,middleIndex,rightIndex);
  amountOfTimesShown();
};

var results = function(){
  for (var i = 0; i < PhotoPicture.allImages.length; i++){
    var liEl = document.createElement('li');
    var recentPhoto = PhotoPicture.allImages[i];
    var percent = Math.round((recentPhoto.clicks / recentPhoto.amountOfTimesShown) * 100);
    liEl.textContent = recentPhoto.id + ': ' + percent + '%';
    clickContainer.appendChild(liEl);

  }
};

// increment amount of clicks

var handleClickOnPhoto = function(event){
  if(totalClicks < itemsToClick){
        
    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;
    for (var i = 0; i < defaultImage.length; i++){
      if(id === defaultImage[i].id){
            
        defaultImage[i].clicks++;
        pickNewPhoto();
            
      }
    }  
  }
        
  totalClicks++;


  //when they reach total max clicks, remove the clicky function
  if(totalClicks === itemsToClick){
    photoImageSectionTag.removeEventListener('click', handleClickOnPhoto);
    results();
  }
};


photoImageSectionTag.addEventListener('click', handleClickOnPhoto);



// Instantiate my image objects

new PhotoPicture('Bag', '../img/bag.jpg');
new PhotoPicture('banana', '../img/banana.jpg');
new PhotoPicture('bathroom', '../img/bathroom.jpg');
new PhotoPicture('boots', '../img/boots.jpg');
new PhotoPicture('breakfast', '../img/breakfast.jpg');
new PhotoPicture('bubblegum', '../img/bubblegum.jpg');
new PhotoPicture('chair', '../img/chair.jpg');
new PhotoPicture('cthuihu', '../img/cthuihu.jpg');
new PhotoPicture('dog-duck', '../img/dog-duck.jpg');
new PhotoPicture('dragon', '../img/dragon.jpg');
new PhotoPicture('pen', '../img/pen.jpg');
new PhotoPicture('pet-sweep', '../img/pet-sweep.jpg');
new PhotoPicture('scissors', '../img/scissors.jpg');
new PhotoPicture('shark', '../img/shark.jpg');
new PhotoPicture('sweep', '../img/sweep.jpg');
new PhotoPicture('tauntaun', '../img/tauntaun.jpg');
new PhotoPicture('unicorn', '../img/unicorn.jpg');
new PhotoPicture('usb', './img/usb.jpg');
new PhotoPicture('water-can', '../img/water-can.jpg');
new PhotoPicture('wine-glass', '../img/wine-glass.jpg');



pickNewPhoto();

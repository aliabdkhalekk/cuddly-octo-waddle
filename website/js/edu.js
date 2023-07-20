var images = document.querySelectorAll('.slideshow img');
var currentImageIndex = 0;

function showNextImage() {
  // Hide the current image
  images[currentImageIndex].classList.remove('active');
  
  // Increment the current image index
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  // Show the next image
  images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000);




     // Wait for the DOM to load
     document.addEventListener('DOMContentLoaded', function () {
        // Select all the service elements
        var services = document.querySelectorAll('.service');

        // Set the initial index and time interval
        var currentIndex = 0;
        var interval = 2000; // Change image every 2 seconds

        // Define the image URLs
        var imageUrls = ['img/course-1.jpg', 'img/course-2.jpg', 'img/course-3.jpg', 'img/course-4.jpg', 'img/course-5.jpg', 'img/course-6.jpg'];

        // Function to change the active image for each service element
        function changeImage(service) {
            // Remove the 'active' class from the current service element
            service.classList.remove('active');

            // Calculate the index of the next service element
            currentIndex = Math.floor(Math.random() * imageUrls.length);

            // Add the 'active' class to the next service element
            service.classList.add('active');

            // Update the background image of the next service element
            var backgroundImage = 'url("' + imageUrls[currentIndex] + '")';
            var cardImage = service.querySelector('.one, .two, .three');
            cardImage.style.backgroundImage = backgroundImage;
        }

        // Call the changeImage function initially for each service element
        services.forEach(function (service) {
            changeImage(service);
        });

        // Set an interval to call the changeImage function every specified interval for each service element
        setInterval(function () {
            services.forEach(function (service) {
                changeImage(service);
            });
        }, interval);
    });
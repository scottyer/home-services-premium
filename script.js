// Initialize the Animate On Scroll (AOS) Engine
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        // Animation runtime length (in milliseconds)
        duration: 1000, 
        
        // Premium, intentional ease curve that slows down smoothly at the end
        easing: 'ease-out-cubic', 
        
        // Tells the page to animate components only once while scrolling down
        once: true, 
        
        // Disables animations on ultra-slow/ancient mobile devices for better performance
        disable: 'mobile' 
    });
});

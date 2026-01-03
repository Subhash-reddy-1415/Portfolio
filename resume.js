$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');

        // Hide the menu only on mobile screens after clicking a link
        if ($(window).width() <= 768) {
            $(".navbar ul").hide(); // Hides the navigation menu on mobile
        }
    });

    // Toggle navigation menu for smaller screens
    $("button").click(function () {
        $(".navbar ul").toggle(); // Toggle the visibility of the navigation menu on mobile
    });
});



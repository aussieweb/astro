/* =============================================================
 * astro.js
 * Mobile-first navigation patterns.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net/
 * ============================================================= */

(function($) {
    $(function () {
        $('.nav-toggle').click(function(e) { // When a link or button with the .nav-toggle class is clicked
            e.preventDefault(); // Prevent the default action from occurring

            // Set Variables
            var dataID = $(this).attr('data-target'); // dataID is the data-target value
            var hrefID = $(this).attr('href'); // hrefID is the href value

            // Toggle the Active Class
            if (dataID)  { // If the clicked element has a data-target
                $(dataID).toggleClass('active'); // Add or remove the .active class from the element whose ID matches the data-target value
            }
            else { // Otherwise
                $(hrefID).toggleClass('active'); // Add or remove the .active class from the element whose ID matches the href value
            }
        });
    });
})(jQuery);





/* =============================================================
 * js-accessibility.js
 * Adds .js class to <body> for progressive enhancement.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net
 * ============================================================= */

(function($) {
    $(function () {
        $('body').addClass('js'); // On page load, add the .js class to the <body> element.
    });
})(jQuery);

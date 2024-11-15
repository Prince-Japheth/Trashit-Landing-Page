(function () {
    /*=====================================
    Sticky Navbar
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        if (header_navbar) { // Check if navbar exists
            var sticky = header_navbar.offsetTop;
        
            var logo = document.querySelector('.navbar-brand img');
            if (logo) { // Check if logo exists
                if (window.pageYOffset > sticky) {
                    header_navbar.classList.add("sticky");
                    logo.src = 'assets/images/logo/logo.svg';
                } else {
                    header_navbar.classList.remove("sticky");
                    logo.src = 'assets/images/logo/white-logo.svg';
                }
            }
        
            // Show or hide the back-to-top button
            var backToTop = document.querySelector(".scroll-top");
            if (backToTop) { // Check if back-to-top exists
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    backToTop.style.display = "flex";
                } else {
                    backToTop.style.display = "none";
                }
            }
        }
    };

    //===== Mobile Menu Button
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) { // Check if mobile-menu-btn exists
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });
    }

    //===== WOW.js (if used for animations)
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
})();

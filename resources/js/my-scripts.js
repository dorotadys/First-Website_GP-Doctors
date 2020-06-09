/* For the sticky navigation */                                  
const navbar = document.getElementsByTagName('nav')[0];

function stickyToggleFunction() {
    if (window.pageYOffset > 650) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

window.addEventListener('scroll', stickyToggleFunction, false);

/* Mobile navigation */
function slideToggleFunction() {
let mobileNav = document.getElementsByClassName('.main-nav'); 
if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
} else {
    mobileNav.style.display = 'block';
}
}


// $('.js--nav-icon').click(function() {
//   var nav = $('.js--main-nav');
 
//  nav.slideToggle(200);
//   var icon = $('.js--nav-icon i');
//   if (icon.hasClass('ion-navicon-round')) {
//       icon.addClass('ion-close-round');
//       icon.removeClass('ion-navicon-round');
//   } else {
//       icon.addClass('ion-navicon-round');
//       icon.removeClass('ion-close-round');
// }
// })


//  /* Navigation scroll */

//  $(function() {
//  $('a[href*="#"]:not([href="#"])').click(function() {
//      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//          var target = $(this.hash);
//          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//          if (target.length) {
//              $('html, body').animate({scrollTop: target.offset().top}, 1000);
//              return false;
//          }
//      }
//  });
// });

// /* Mobile navigation */

// $('.js--nav-icon').click(function() {
//   var nav = $('.js--main-nav');
 
//  nav.slideToggle(200);
//   var icon = $('.js--nav-icon i');
//   if (icon.hasClass('ion-navicon-round')) {
//       icon.addClass('ion-close-round');
//       icon.removeClass('ion-navicon-round');
//   } else {
//       icon.addClass('ion-navicon-round');
//       icon.removeClass('ion-close-round');
// }
// })


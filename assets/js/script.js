$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 1.50781L6.94141 0.75L0.25 7L6.94141 13.25L7.75 12.4961L1.87109 7L7.75 1.50781Z" fill="white"/></svg>',
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.25 1.50781L1.05859 0.75L7.75 7L1.05859 13.25L0.25 12.4961L6.12891 7L0.25 1.50781Z" fill="white"/></svg>'
  ],
    dots: false,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  });
});
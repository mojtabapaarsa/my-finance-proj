 $(document).ready(function(){
     $('.navbar-toggle').click(function(){
         $('.mysidebar').css('visibility' , 'visible')
     })
     $('.close').click(function(){
        $('.mysidebar').css('visibility' , 'hidden')
     })
     
 })

 $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  
 $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:30,
    autoplay:false,
    nav:true,
    responsive:{
        0:{
            items:1,
            margin:100
        },
        765:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
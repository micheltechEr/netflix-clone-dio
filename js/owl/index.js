$('.owl-carousel').owlCarousel({
    loop:true,
    margin:4,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(window).on("load", function(){
    const navbar = document.querySelector('header');
    window.onscroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    };
})

$(".more_info").on("click", function(){
    $(".description-title").toggleClass('hide')
})


    if ($(window).width() <= 768) { 
        $(".lista-menu").removeClass("flex");
        $(".lista-menu").addClass("hide");
        } 

        $(".open-menu").on("click", function(){ 
        $(".lista-menu").toggleClass('hide')
})

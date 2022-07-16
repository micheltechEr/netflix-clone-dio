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

const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


$(".more_info").on("click", function(){
    $(".description-title").toggleClass('hide')
})
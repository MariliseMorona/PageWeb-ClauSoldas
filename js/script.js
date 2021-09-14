let navBtn = $('.nav-item');
let bannerSection = $('#carouselExampleInterval');
let aboutSection = $('#about-area');
let servicesSection = $('#about-service');
let contactSection = $('#about-contact');


/* Funcionalidades do buttons do menu */
let scrollTo = '';
$(navBtn).click(function(){
    let btnId = $(this).attr('id');

    console.log(btnId);

    if(btnId == 'quemsomos-menu'){
        scrollTo = aboutSection;
    }else if(btnId == 'servicos-menu'){
        scrollTo = servicesSection;
    }else if(btnId == 'contato-menu'){
        scrollTo = contactSection;
    }else{
        scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1200);
});

/* Alterar a cor da Navbar quando scrollar a page */
$(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
        $('.navbar').css("background-color", "#000000")
    } else {
        $('.navbar').css("background-color", "trargba(0, 0, 0, 0.849)")
    }
});
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
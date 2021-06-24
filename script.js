let navBtn = $('.nav-item');
let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let servicesSection = $('#about-service');
let contactSection = $('#about-contact');

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
    }, 1500);
});

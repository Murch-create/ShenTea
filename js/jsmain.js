$(document).ready(function(){
    $('.head-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        dots: false,
        lazyLoad: 'progressive',
        asNavFor: '.slick-about'
    })
    $(".slick-about").slick({
        asNavFor: '.head-slick',
        dots: false, 
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true
    })
    
});
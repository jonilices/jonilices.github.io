$(document).ready(function(){

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            'top':'0'
        }, 500 + (index * 500));
    });

    //Efecto Header
    if( $(window).width() > 800 ) {
        $('header .contenedor-texto').css({
            'opacity': 0,
        });

        $('header .contenedor-texto').animate({
            'opacity': 1,
        }, 2000);
    }

    //Efecto de escrito
    var typed = new Typed(".typed", {
        strings:["Data Scientist.", "Developer.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Scroll automatico
    var acercaDe = $('#acerca-de').offset().top,
        myProjects = $('#trabajos').offset().top+100,
        contact = $('#contacto').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        }, 500);
    });

    $('#btn-my-projects').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: myProjects
        }, 500);
    });

    $('#btn-contact').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact
        }, 500);
    });


});
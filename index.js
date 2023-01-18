function save_offset_top() {
    sec_pos = [];

    $('section').each(function () {
        var this_offset = $(this).offset().top;
        sec_pos.push(this_offset);
    });

    last = $('section').last().offset().top + $('section').last().height();
    sec_pos.push(last);
}

$('#header .gnb > li').on('mouseover', function () {

    $(this).find(".shop_gnb, .animal_gnb").stop().slideDown(300);
});
$('#header .gnb > li').on('mouseleave', function () {

    $(this).find(".shop_gnb, .animal_gnb").stop().slideUp(300);

});

$("#bewegbarerHeader .slide").eq(0).removeClass('active').addClass('active').siblings().hide();
let slideI = 0;
setInterval(function () {
    slideI = 0


});


var swiper = new Swiper(".team-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        300:{
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});


var swiper = new Swiper(".news-slider", {
    
    grabCursor: true,
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});

$(function () {
    $('#scrolltopbutton.scrolltop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('#scrolltopbutton2.scrolltop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() < 20) {
            $('.scrolltop').fadeOut("slow");
        } else {
            $('.scrolltop').fadeIn("slow");
        }
    });
   
    const zoomElement = document.querySelector('.zoom')
    const imgElement = document.querySelector('#bild')
    const WIDTH = document.body.clientWidth
    const HEIGHT = zoomElement.clientHeight
    const IMAGE_WIDTH = imgElement.clientWidth
    const ZOOM_SPEED = 550
    const ZOOM_BREAKPOINT = WIDTH / IMAGE_WIDTH 
    
    


    function anim() {
        let scroll = window.scrollY
        let temp = scroll / ZOOM_SPEED
        let zoom = temp > 1 ? temp : 1

        
        if (zoom < ZOOM_BREAKPOINT) {
            imgElement.style.transform = `scale(${zoom})`
            
            zoomElement.style.position = 'absolute'
        } else {
            imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`
            zoomElement.style.position = 'absolute'
            
        }
    }

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }

    document.addEventListener('scroll', () => window.requestAnimationFrame(anim))


    

});
window.addEventListener('scroll', function () {
    var docHeight = document.documentElement.offsetHeight;
    var scrollPos = window.pageYOffset;
    var scrollPercent = scrollPos / (docHeight - window.innerHeight);
    var bilder = document.querySelector('#h5')
    if (scrollPercent > 0.60) {
        bilder.style.opacity = "1"
    }
    else if(scrollPercent > 0.41){
        bilder.style.opacity = "0.5"
    }
    
    else{
        bilder.style.opacity = "0"
    }
});


  
   
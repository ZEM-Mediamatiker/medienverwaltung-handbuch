// SET THE FOOTER FIXED-BOTTOM WHEN THE WINDOW-HEIGHT IS BIGGER THAN THE BODY

function fixFooter() {
        if ($('html').outerHeight()<$(window).outerHeight()) {
            $('.footer').addClass('fixed-footer');
        }
        else {
            $('.footer').removeClass('fixed-footer');
       }    
}

// SWITCH BETWEEN CONTAINER AND CONTAINER-FLUID WHEN RESIZING THE BROWSERWINDOW
    
function containerSwitch() {
    
    let $s = $('.switch-cont');
    
    if ($(window).width() <= 991.98 && $s.hasClass('container')) {
        $s.removeClass('container').addClass('container-fluid');
    }
    else if ($(window).width() > 991.98 && $s.hasClass('container-fluid')){
        $s.removeClass('container-fluid').addClass('container');
    }
}

// CLOSE MOBILE NAVIGATION WHEN THE BROWSERWINDOW IS BIGGER THAN PIXEL-NUMBER

function openMenu() {
    if($(window).width() > 991.98) {
        $('.mobile-menu').removeClass('open-menu');
    }
}

$(document).ready(function() {
    
    // ACCORDION FUNCTION TO OPEN ACCORDION AN REVEAL TEXT INSIDE
    
   function close_accordion_section( $head, attr ) {
       $head.removeClass('active');
       $('.faq-accordion ' + attr).slideUp(300).removeClass('open');
       $head.find('.icon--root').css("transform", "rotate(0deg)");
   } 
    $('.faq-head').click(function(e){
        var currentAttrValue = $(this).attr('href');
        if($(this).hasClass('active')) {
            close_accordion_section( $(this), currentAttrValue );
        }else {
           //close_accordion_section();
            $(this).addClass('active');
            $(this).find('.icon--root').css("transform", "rotate(180deg)");
            $('.faq-accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
    
    // ADDING AN SPAN WITH THE GREATER-ICON IF THERE ARE MORE THEN ONE BREDCRUMB ON A SITE
    
    if ($('.breadcrumbs-container > a').length >= 2) {
        $('.breadcrumbs-container a:not(:last-child)').after('<span class="icon icon--greater before-crumbs"></span>');
    }
    
    // OPEN NAVIGATION WHEN CLICK ON THE MENU-BUTTON
    
    $('.togglebutton').click(function(){
       $('.mobile-menu').toggleClass('open-menu');
    });
    
    // CLOSE NAVIGATION WHEN CLICK ON BACKDROP (Black background on the side of the menu)
    
    $('.backdrop').click(function(){
       $('.mobile-menu').toggleClass('open-menu'); 
    });
    
    setTimeout(function(){
        fixFooter();
    }, 200);
    
    containerSwitch();
    
    openMenu();
    
    // START FUNCTIONS WHEN RESIZING THE BROWSERWINDOW, THE FUNCTION BREAKS WHEN NO RESIZE
    
    $(window).resize(function(){

    fixFooter();
    
    containerSwitch();
        
    openMenu();
        
    });
});
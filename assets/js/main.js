$(document).ready(function() {
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
    
    if ($('body').height()<$(window).height()) {
        $('.footer').addClass('fixed-footer');
       }else {
        $('.footer').removeClass('fixed-footer');
       } 
    
    if ($('.breadcrumbs-container > a').length >= 2) {
        $('.breadcrumbs-container a:not(:last-child)').after('<span class="icon icon--greater before-crumbs"></span>');
    }
    else {
        console.log('');
    }
});
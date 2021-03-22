$(document).ready(function(){
    $(".header-left .header-nav span").click(function(){
        $(".header-menu").slideToggle();
    });
});

$(window).on("scroll", function(){
    var piassarkar = $(window).scrollTop();
    if ( piassarkar > 300 ){
        $(".top-up").fadeIn();
    } else{
        $(".top-up").fadeOut();
    }
})
$(document).ready(function(){
    $(".top-up").click(function(){
        $("html,body").animate({
            scrollTop: 0,
        }, 'fast', 'swing')
    })
})



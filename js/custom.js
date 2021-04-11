$(function () {
    // Nice Scroll
    $('html').niceScroll({
        cursorwidth: "7px",
        background: "#333",
        cursorcolor: "#fbaf32",
        cursorborder: 0,
        cursorborderradius: "50px"
    });
    // Padding Top Header
    $('.header').css("paddingTop", $('.navbar').innerHeight());
    // Add Class Navbar 
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    // Click Show Search Effects
    $('.header .header-info .navbar span .fa-search').click(function () {
        $('.header .search').show();
    });
    // Click Hide Search Effects
    $('.header .search span').click(function () {
        $('.header .search').hide();
    });
    // Scroll Top Page
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1500) {
            $('#scrolltop').show();
        } else {
            $('#scrolltop').hide();
        }
    });
    //Click On Button To Scroll Top
    $("#scrolltop").click(function () {
        $("html , body").animate({
            scrollTop: 0
        }, 1000);
    });
    // Add Class Active Page Menu
    $('.menu .info-text .tabs li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Click Function Show List Menu Products
    $('.menu .info-text .tabs li').click(function () {
        $('.menu .list-menu > div').hide();
        $($(this).data('filter')).show();
    });
    // Add Class Active Blog Posts Number
    $('.posts .num-page li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Calculate Your Message Of Number
    var myLength = $('textarea').attr('maxlength');
    $('.message').html('<span>' + myLength + '</span>');
    $('textarea').keyup(function () {
        var myTextLength = $(this).val().length,
            char = myLength - myTextLength;
        $('.message').html('<span>' + char + '</span>');
        if(myTextLength >= 150) {
            $('.message').addClass('pug');
        }else {
            $('.message').removeClass('pug');
        }
    });
});
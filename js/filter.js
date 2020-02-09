$(document).ready(function () {
    $('.filter-button:first-child').addClass("active");
    $('.description').hide();
    $('.logo-img').removeClass('showDesc');
    $('.gallery_product').removeClass('showDesc');

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        $('.filter-button').removeClass("active");
        if (value == "all") {
            $('.filter-button:first-child').addClass("active");
            $('.filter').show('1000');
            $('.description').hide('3000'); 
            $('.logo-img').removeClass('showDesc');
            $('.gallery_product').removeClass('showDesc');



        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');    
            $('.description').show('3000'); 
            $('.logo-img').addClass('showDesc');
            $('.gallery_product').addClass('showDesc');     
            $(this).addClass("active");
        }
    });




});
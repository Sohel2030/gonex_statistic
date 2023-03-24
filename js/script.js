// Isotope Start
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


     $(document).ready(function () {
            $(".tech_slider")
             $(".tastimonial_slider")
});
     //Ripples1

$('.footer').ripples({
    resolution: 1000
});
//Ripples1 end

//Ripples2

$('.fiootddd').ripples({
    resolution: 1000
});
//Ripples1 end

//Ripples2

$('.frreedd').ripples({
    resolution: 1000
});
//Ripples2 end
$(document).ready(() => {

    $('.menu_category_item').click((e) => {
        let currentTarget = $(e.target);
        $('.products_container').hide();
        let id = currentTarget.data('id');
        $('#' + id).show();
        
        $('.menu_category_item').removeClass('active');
        currentTarget.addClass('active');

        $('#' + id + ' .menu_list').slick('refresh');
        $('#' + id + ' .menu_slider').slick('refresh');
    });
$('#burger_container .menu_list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '#burger_container .menu_slider'
});
$('#burger_container .menu_slider').slick({
  slidesToShow: 7,
  slidesToScroll: 7,
  asNavFor: '#burger_container .menu_list',
  dots: false,
  centerMode: false,
    focusOnSelect: true,
  infinity: false
}); 
    
    $('#fries_container .menu_list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '#fries_container .menu_slider'
});
$('#fries_container .menu_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '#fries_container .menu_list',
  dots: false,
  centerMode: false,
    focusOnSelect: true,
  infinity: false
}); 
    
    $('#sauce_container .menu_list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '#sauce_container .menu_slider'
});
$('#sauce_container .menu_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '#sauce_container .menu_list',
  dots: false,
  centerMode: false,
    focusOnSelect: true,
  infinity: false
}); 
    
    $('#drinks_container .menu_list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '#drinks_container .menu_slider'
});
$('#drinks_container .menu_slider').slick({
  slidesToShow: 7,
  slidesToScroll: 7,
  asNavFor: '#drinks_container .menu_list',
  dots: false,
  centerMode: false,
    focusOnSelect: true,
  infinity: false
}); 
})
 
	
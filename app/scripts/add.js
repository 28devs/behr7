$(function(){
	$(document).on('click', '.scroll-to-topblog', function (event) {
		event.preventDefault();
		//calculate destination place
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		} else {
			dest = $(this.hash).offset().top;
		}
		//go to destination
		$('html,body').animate({
			scrollTop: dest - 71
		}, 500, 'swing');
	});

	//alert('w='+$(window).width()+', h='+$(window).height());

	calcVH();
	$(window).on('resize orientationchange', function() {
		calcVH();
	});
})

function calcVH() {
    $('.hero .glide__slides').innerHeight( $(this).innerHeight() - 50 );
}
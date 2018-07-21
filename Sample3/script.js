$(document).ready(function() {
	// Animation after continue
	$(".continue").click(function() {

		setTimeout(resetCSS, 1000);

		$(".continue").hide();
		$("#bar1").animate({left:"100%"});
		$("#bar2").animate({right:"100%"});
		$("#bar3").animate({left:"100%"});
		$("#bar1").delay(2000).fadeOut();
		$("#bar2").delay(2000).fadeOut();
		$("#bar3").delay(2000).fadeOut();
		$(".topnavbar").delay(1000).fadeIn(1000);
		$(".homebg").delay(1000).fadeIn(500);
		$(".spacebg").delay(1000).fadeIn(500);
		$("footer").delay(1000).fadeIn(500);
		$('html, body').css('overflowY', 'initial');
		$('html, body').css('overflowX', 'initial');

		function resetCSS () {
		$('.content1').css('display', 'block');
		$('.content3').css('display', 'flex');
		}
	});
});

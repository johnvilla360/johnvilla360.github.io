$(document).ready(function() {
	
	alert('This is page is still under progress...');

	$(".joinnow").click(function() {
		$(".joinnow").fadeOut(), 50;
		$("#bar1").delay(400).animate({bottom: '400px'}).hide(2500);
		$("#bar2").delay(350).fadeOut(1000);
		$("#bar3").delay(750).animate({top: '700px'}).hide(2000);
		$(".topnavbar").delay(1000).fadeIn(1000);
		$(".homebg").delay(100).show(100);
		$('html, body').css('overflowY', 'auto');
	});
});
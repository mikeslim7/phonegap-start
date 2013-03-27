document.addEventListener('deviceready', scroll, false);

function scroll() {
	var theScroll;
	theScroll = new iScroll('wrapper');
	$('#tab-bar li a').click(function(e) {
		e.preventDefault();
		var nextPage = $(e.target.hash);
		$("#pages .current").removeClass("current");
		nextPage.addClass("current");
	});
}
// document.addEventListener('DOMContentLoaded', scroll, false);

// function onBodyLoad()
// {
// document.addEventListener("deviceready", scroll, false);
// }

function page(toPage) {
	var toPage = $(toPage), fromPage = $("#pages .current");
	if (toPage.hasClass("current") || toPage === fromPage) {
		return;
	}
	;
	toPage.addClass("current fade in").one("webkitAnimationEnd", function() {
		fromPage.removeClass("current fade out");
		toPage.removeClass("fade in")
	});
	fromPage.addClass("fade out");
}

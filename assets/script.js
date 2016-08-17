/* Global variables declared. */
var pageMap = new Map();
var map1 = new Map();
var map2 = new Map();
var map3 = new Map();
var map4 = new Map();
var map5 = new Map();
var map6 = new Map();
pageMap.set("p1", map1);
pageMap.set("p2", map2);
pageMap.set("p3", map3);
pageMap.set("p4", map4);
pageMap.set("p5", map5);
pageMap.set("p6", map6);

function showNext() {
	var currentAbility = $('.activeAbility');
	var nextAbility = currentAbility.next();

	currentAbility.hide(500);
	nextAbility.show(500);
	$(window).scrollTop(0);

	currentAbility.removeClass('activeAbility');
	nextAbility.addClass('activeAbility');
}

var main = function() {
	/* When 'start', 'nextPage', 'see the result' is pressed, go to the next page. */
	$('.buttonNext').click(function() {	
		if ((answered.size) == 6) {
			showNext();
			answered.clear();
		} else {
			alert(answered.size);
		}
	});
	
	/* When you answer a ranking question, do the following. */
	$('.ranking > button').click(function(){
		var thisQuestion = $(this).parent();
		// alert(answered.has(thisQuestion));
		answered.add(thisQuestion.attr('class'));
		thisQuestion.children('button').css('background-color', 'white');
		$(this).css('background-color', '#c1c1d7');
	});
	
	/* When you answer a choices question, do the following. */
	$('.choices > button').click(function() {
		var thisQuestion = $(this).parent();
		thisQuestion.children('button').css('background-color', '#e0e0eb');
		thisQuestion.children('button').css('color', '#3c3c5d');
		$(this).css('background-color', '#7575a3');
		$(this).css('color', 'white');
	});
};

$(document).ready(main);
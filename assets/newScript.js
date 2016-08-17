var main = function () {
	/* Show the first page. */
	showPage(curPage, 0);

	/* When 'start', 'nextPage', 'see the result' is pressed. */
	$('.buttonNext').click(function() {
		if ((pageMap.get(curPage).size) == 6) { showNext(); } 
		else { alert('请作答本页全部问题'); }
	});

	/* Steps when a ranking question is answered. */
	$('.ranking > button').click(function(){
		var curRanking = $(this).parent();
		var curQuestion = curRanking.parent().attr('id');
		var curAnswer = parseInt(($(this).attr('class'))[1]);
		curMap.set(curQuestion, curAnswer);
		curRanking.children('button').css('background-color', 'white');
		$(this).css('background-color', '#5dac81');
	});

	/* Steps when a multi-choice question is answered. */
	// $('.ranking > button').click(function(){
	// 	var curMulti = $(this).parent();
	// 	var curQuestion = curRanking.parent().attr('id');
	// 	var curAnswer = parseInt(($(this).attr('class'))[1]);
	// 	curMap.set(curQuestion, curAnswer);
	// 	curRanking.children('button').css('background-color', 'white');
	// 	$(this).css('background-color', '#5dac81');
	// });
}

/* Show the next page. */
function showNext() {
	hidePage(curPage, 600);
	curPage = pageIte.next().value;
	curMap = mapsIte.next().value;
	$(window).scrollTop(0);
	showPage(curPage, 600);
}

/* Show or Hide page according to ID and time */
function showPage(key, time) { $("#" + key).show(time); }
function hidePage(key, time) { $("#" + key).hide(time); }


/* Data structure(Map of maps) and Variables. */
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
var pageIte = pageMap.keys();
var mapsIte = pageMap.values();
var curPage = pageIte.next().value;
var curMap = mapsIte.next().value;

/* Run main when page is loaded. */
$(document).ready(main);
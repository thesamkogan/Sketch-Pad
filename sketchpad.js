$(document).ready(function() {
	createGrid(16);
	basicHover();
});

function createGrid(side) {
	var squareSize = (960)/side;
	var container = $('.container').html("");
	for(var x = 0; x < side; x++) {
		for(var y = 0; y < side; y++) {
			container.append($("<div class='square'></div>").height(squareSize).width(squareSize));
		};
	};
};

window.onload = function() {
	document.getElementById("reset").onclick = function() {
		newGrid(1);
	};	
	document.getElementById("randomColor").onclick = function() {
		newGrid(2);
	};
	document.getElementById("gradual").onclick = function() {
		newGrid(3);
	};
};


function basicHover() {
	$('.square').mouseenter(function(){
		$(this).css("opacity", 1)
	})
}

function hoverOpac() {
	$('.square').hover(function() {
		var value = parseFloat($(this).css("opacity"));
		if(value<1) {
			value += 0.1;
			$(this).css("opacity", value);
		};
	});
};

function randomColor(){
	$('.square').mouseenter(function(){
		$(this).css('background-color', 'rgb('+(Math.floor(Math.random()*256))+', '
			+(Math.floor(Math.random()*256))+', '+(Math.floor(Math.random()*256))+')');
	});
};

function newGrid(mode){
	if (mode == 1) {
		var newSides = +prompt('How many squares per side?');
		if (newSides > 0) {
			createGrid(newSides);
			basicHover();
		};
	};
	if (mode == 2) {
		var newSides = +prompt('How many squares per side?');
		if (newSides > 0) {
			createGrid(newSides);
			randomColor(newSides);
			basicHover();
		};
	};
	if (mode == 3) {
		var newSides = +prompt('How many squares per side?');
		if (newSides > 0) {
			createGrid(newSides);
			hoverOpac();
		};
	};
};
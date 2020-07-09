window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let canvas = document.querySelector('#canvas'),
			ctx = canvas.getContext('2d'),
			clicks = [[0, 0]];

	canvas.addEventListener('click', function(e) {
		e = e || window.event;

		let x = e.offsetX,
				y = e.offsetY, 
				xy = [x, y];
		
		clicks.push(xy);
		if (clicks.length > 2) {
			ctx.moveTo(clicks[clicks.length - 3][0], clicks[clicks.length - 3][1])
			ctx.lineTo(x, y);
		}
		ctx.moveTo(clicks[clicks.length - 2][0], clicks[clicks.length - 2][1])
		ctx.lineTo(x, y);
		ctx.stroke();

	});

});
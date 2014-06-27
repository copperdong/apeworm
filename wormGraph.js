var xStart = 0;
var xEnd = 24;
var yStart = 0;
var yEnd = 24;

function makeGraph(stage, renderer, width, height) {
	//var stage = new PIXI.Stage(0xFFFFFF, true);
	//var renderer = new PIXI.autoDetectRenderer(width+40, height+40);
	document.body.appendChild(renderer.view);

	var xDist = width/8;
	xDist = xDist.toFixed(2);
	var yDist = height/8;
	yDist = yDist.toFixed(2);

	var graphics = new PIXI.Graphics();
	graphics.lineStyle(1,0x000000,1);
	graphics.moveTo(20,20);
	graphics.lineTo(20,20+height);
	graphics.lineTo(20+width,20+height);
	graphics.lineTo(20+width,20);
	graphics.lineTo(20,20);
	
	stage.addChild(graphics);

	var leftBot = new PIXI.Text(xStart + ", " + yStart, {font: "12px"});
	leftBot.position.x = 10;
	leftBot.position.y = 25+height;	

	var leftTop = new PIXI.Text(xStart + ", " + yEnd, {font: "12px"});
	leftTop.position.x = 10;
	leftTop.position.y = 5;

	var rightBot = new PIXI.Text(xEnd + ", " + yStart, {font: "12px"});
	rightBot.position.x = 10+width;
	rightBot.position.y = 25+height;

	var rightTop = new PIXI.Text(xEnd + ", " + yEnd, {font: "12px"});
	rightTop.position.x = 10+width;
	rightTop.position.y = 5;

	stage.addChild(leftBot);
	stage.addChild(leftTop);
	stage.addChild(rightBot);
	stage.addChild(rightTop);

	renderer.render(stage);
}

var makeWorm = (function(){
	var graphics = null;
	return function make(x, y, stage, renderer, width, height) {
		//deletes previous worm
		if(graphics) {
			stage.removeChild(graphics);
		}

		var xDist = width/(xEnd-xStart);
		var yDist = height/(yEnd-yStart);

		var adjustedX = x*xDist;
		var adjustedY = height-y*yDist;
		graphics = new PIXI.Graphics();
		graphics.beginFill(0x99000,1);
		graphics.drawCircle(adjustedX,adjustedY ,width/20);
		stage.addChild(graphics);
		renderer.render(stage);
	}
})();
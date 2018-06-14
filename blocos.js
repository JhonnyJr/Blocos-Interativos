	window.onload = init;

	var x = 40;
	var y = 50;
 	var xBlue = 40;
  	var yBlue = 50;
	var canvas;
  	var canvasBlue;
	var ctx;
  	var ctxBlue;
	function init() {
		document.addEventListener("keydown", keyHandler); // Quando aperta a tecla
		document.addEventListener("keyup", keyHandler); // Quando solta a tecla
		canvas = document.getElementById('myCanvas');
    	canvasBlue = document.getElementById('blue');
    	ctxBlue = canvasBlue.getContext('2d');
		ctx = canvas.getContext('2d');
		draw();
    	drawBlue();
	}

	function draw() {

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, 400, 400)

		ctx.fillStyle = "red";
		ctx.fillRect(x, y, 110, 70);

	}

  	function drawBlue() {
    	ctxBlue.fillStyle = "white";
    	ctxBlue.fillRect(0, 0, 400, 400);
    
    	ctxBlue.fillStyle="blue";
    	ctxBlue.fillRect(xBlue, yBlue, 110, 70);
  }

	function keyHandler(event) {
		console.log(event);
		if (event.key === 'd') {
			x = x + 10;
			draw();
		}
		else if (event.key === 'a') {
			x = x - 10;
			draw();
		}
    
		else if (event.key === 'w') {
			y = y - 10;
			draw();
		}
		else if (event.key === 's') {
			y = y + 10;
			draw();
		}
    
    	// Setas
    	if (event.keyCode == '39') { // Direita
      		xBlue = xBlue + 10;
      		drawBlue();
    	} else if (event.keyCode == '37') { // Esquerda
      		xBlue = xBlue - 10;
      		drawBlue();
    	} else if (event.keyCode == '40') { // Cima
      		yBlue = yBlue + 10;
      		drawBlue();
    	} else if (event.keyCode == '38') { // Baixo
      		yBlue = yBlue - 10;
      		drawBlue();
    }
	}

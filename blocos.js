<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<script type="text/javascript">
	
	window.onload = init;

	// x y do quadrado vermelho, suas posições
	var x = 40;
	var y = 50;
	//xBlue yBlue do quadrado azul, suas posições
 	var xBlue = 40;
  	var yBlue = 50;
	//variável canvas do quadrado vermelho
	var canvas;
  	//variável canvas do quadrado azul
  	var canvasBlue;
	//variável ctx do quadrado vermelho
	var ctx;
  	//variável ctxBlue do quadrado azul
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
	//função do quadrado vermelho
	function draw() {
	//plano de fundo do quadrado vermelhor
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, 400, 400)
	//quadrado vermelho e sua posição
		ctx.fillStyle = "red";
		ctx.fillRect(x, y, 110, 70);

	}
	//função do quadrado azul
  	function drawBlue() {
  	//plano de fundo do quadrado azul
    	ctxBlue.fillStyle = "white";
    	ctxBlue.fillRect(0, 0, 400, 400);
    //quadrado azul e sua posição
    	ctxBlue.fillStyle="blue";
    	ctxBlue.fillRect(xBlue, yBlue, 110, 70);
  }

  	//mostrar no console quando qualquer tecla é apertada e solta
	function keyHandler(event) {
		console.log(event);


	//teclas ASDW
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
    
    //teclas SETAS
    
    	if (event.key == 'ArrowRight') { // Direita  Poderia usar event.keyCode == '39'
      		xBlue = xBlue + 10;
      		drawBlue();
    } 	else if (event.key == 'ArrowLeft') { // Esquerda  Poderia usar event.keyCode == '37'
      		xBlue = xBlue - 10;
      		drawBlue();
    } 	else if (event.key == 'ArrowDown') { // Cima  Poderia usar event.keyCode == '40'
     		yBlue = yBlue + 10;
      		drawBlue();
    } 	else if (event.key == 'ArrowUp') { // Baixo  Poderia usar event.keyCode == '38'
      		yBlue = yBlue - 10;
      		drawBlue();
    }
	}

</script>
  <body>
	<canvas id="myCanvas" width="400" height="400"></canvas>
    <canvas id="blue" width="400" height="400"></canvas>
		

</body>
</html>

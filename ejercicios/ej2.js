//1 declarar la variable
var circuloX;

function setup(){
	createCanvas(640,360);
	//2 inicializar la variable
	circuloX = 50;
}

function draw(){
	background(50);
	fill(255);
	//3 usar la variable
	ellipse(circuloX,180,24,24);
	//como movemos mas rapido? como mas lento? 
	//como hacia arriba? diagonal?
	circuloX = circuloX+1
}
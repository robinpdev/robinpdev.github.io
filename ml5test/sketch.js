let mobilenet
var mimage;
let netimage;
let classifier;
let label = "loading net...";

let imagepath = 'images/alia.jpg';

let abutton;
let bbutton;
let cbutton;

let trainingbutton;


function whentraining(loss){
	if(loss != null){
		console.log(loss);
	}
	else{
		console.log("training complete!")
		mobilenet.classify(gotresults);
	}
	
}

function modelready(){
	console.log('Model is done!');
	label = "net loaded"
	//mobilenet.predict(gotresults);
}

function imageready(){
	console.log("video done");
}


function gotresults(error, result){

	if(error){
		console.error(error);
	}
	else{
		console.log(result);
		label = result;
		//console.log(label);
		mobilenet.classify(gotresults);
		
	}

}

function setup(){

	createCanvas(640, 480);
	//mimage = createCapture(VIDEO);
	netimage = createCapture(VIDEO);
	netimage.hide();
	background(0);
	mobilenet = ml5.featureExtractor('MobileNet', modelready);
	classifier = mobilenet.classification(netimage, imageready);

	abutton = createButton('class a');
	abutton.mousePressed(function(){
		classifier.addImage('class a');
	});

	bbutton = createButton('class b');
	bbutton.mousePressed(function(){
		classifier.addImage('class b');
	});

	cbutton = createButton('class c');
	cbutton.mousePressed(function(){
		classifier.addImage('class c');
	});

	trainingbutton = createButton('commence training');
	trainingbutton.mousePressed(function(){
		classifier.train(whentraining);
	});

}

function draw(){
	background(50);
	image(netimage, 0, 0, width, height);
	//netimage.hide();
	
	fill(255);
	noStroke();
	textSize(40);
	text("class: " + label, 10, height - 100);

}
let mobilenet
var mimage;
let netimage;
let classifier;
let label = "loading net...";

let imagepath = 'images/alia.jpg';

let imagebutton;

let slider;

let trainingbutton;


function whentraining(loss){
	if(loss != null){
		label = loss.toString();
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

	netimage = createCapture(VIDEO);
	netimage.hide();
	background(0);

	mobilenet = ml5.featureExtractor('MobileNet', modelready);
	classifier = mobilenet.classification(netimage, imageready);



	slider = createSlider(0, 1, 0.5, 0.01);

	imagebutton = createButton('add image to net');
	imagebutton.mousePressed(function(){
		console.log(slider.value());
		classifier.addImage(slider.value());
	})

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
let mobilenet
let image;



function modelready(){
	console.log('Model is done!');
	mobilenet.predict(image, gotresults);
}


function imageready(){
	image(image, 0, 0, width, height);
}

function gotresults(error, results){

	if(error){
		console.error(error);
	}
	else{
		console.log(results)
	}

}

function setup(){

	createCanvas(640, 480);
	image = createImg('images/brugge.jpg', imageready)
	background(0);

	mobilenet = ml5.imageClassifier('MobileNet', modelready);

}
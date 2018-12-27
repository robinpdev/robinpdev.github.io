let mobilenet
var mimage;
let netimage;

let imagepath = 'images/controller.jpg';

function modelready(){
	console.log('Model is done!');
	mobilenet.predict(netimage, gotresults);
}

function imageready(){
	console.log("image done");
}

function gotresults(error, results){

	if(error){
		console.error(error);
	}
	else{
		console.log(results)
		let label = results[0].className;
		console.log(label);
		fill(0);
		textSize(20);
		text(label, 10, height - 100);
		//createP(label);
	}

}

function setup(){

	createCanvas(640, 480);
	mimage = loadImage(imagepath);
	netimage = createImg(imagepath, imageready)
	netimage.hide();
	background(0);
	mobilenet = ml5.imageClassifier('MobileNet', modelready);

}

function draw(){
	image(mimage, 0, 0, width, height);
}
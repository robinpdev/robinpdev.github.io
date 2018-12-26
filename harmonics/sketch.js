var harmonics = [];

function setup() {
  createCanvas(1100, 800);
  frameRate(60);
  
  document.getElementById("textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        
      	var textboxvalue = document.getElementById("textbox").value;
      	harmonics[harmonics.length] = parseInt(textboxvalue);
      	let showstring = harmonics.map(String);	
      	document.getElementById("textfield").value = showstring;
      	document.getElementById("textbox").value = null;
      
      	console.log(harmonics);
      
    }
    
    if(event.keyCode == 46){
      
      harmonics = [];
      console.log(harmonics);
      
      shape = [];
      wave = [];
      
    }
    
    if(event.keyCode == 8){
      
      if(harmonics.length == 0){ harmonics.splice(0, 1); }
      else{ harmonics.splice(harmonics.length - 1); }
      
      console.log(harmonics);
      
      shape = [];
      wave = [];
      
    }
	});
}

let time = 0;
var wave = [];
var wavex = []

var shape = [];


let xo = 0;
let yo = 0;

function draw() {
  
  //
  
  
	
	//fill(255);
  noFill();
	
  background(255);
	translate(200, 300);
	
	let radius = PI * 20;
	
	stroke(0);
	//ellipse(0, 0, radius * 2);
	
	let x = 0;
	let y = 0;
  
  let rc = 1;
  let incr = 1;
  let circles = 4;
  
	
	
	for(let i = 0; i < harmonics.length; i += 1){
		
    let harmonic = harmonics[i];
    
		let xn = x + (1 / harmonic) * cos(harmonic * time) * rc;
		let yn = y + (1 / harmonic) * sin(harmonic * time) * rc;
		
		ellipse(radius * x, radius * y, (radius * 2) / (harmonic / rc));
		line(radius * x, radius * y, xn * radius, yn * radius);
		
		//vertex(xn, yn);
		
		x = xn;
		y = yn;
	}
	
	ellipse(x, y, 3);
	
	
	y *= radius;
	x *= radius;

	stroke(0);
	//line(0, 0, x, y);
	//ellipse(x, y, 8);
	stroke(0, 255, 0);
	line(100, 0, 100, y);
	
	
	wave.push(y);
	shape.push(x);
  
  
	beginShape();
	noFill();
	stroke(255, 0, 0);
	
	for(let i = 0; i < shape.length; i++){
		
		vertex(shape[shape.length - i], wave[wave.length - i]);
		
	}
	
	endShape();
	
	
	
	

	line(x, y, 200, wave[wave.length - 1]);
	
	beginShape();
	noFill();
	stroke(0);
	
	for(let i = 0; i < wave.length; i++){
		
		vertex(i + 200, wave[wave.length - i]);
		
	}
	
	endShape();
  
  
  stroke(255, 0, 0);
  line(x, y, shape[shape.length - 1], 200);
  
  beginShape();
	noFill();
	stroke(0);
	
	for(let i = 0; i < shape.length; i++){
		
		vertex(shape[shape.length - i], i + 200);
		
	}
	
	endShape();

	
	if(wave.length >= 800){
		
		//print(wave.length);
		wave.shift();
		
	}
	
	if(shape.length >= 400){
		
		//print(wave.length);
		shape.shift();
		
	}
	
	if(time >= 6.25){
		
		print("time");
		time = 0;
    playFrequency(wave);
		
	}
	else{
	time += 0.02;
	}
	//print(time);
	
}

var audioContext = new AudioContext();




function playFrequency(data) {
    // create 2 second worth of audio buffer, with single channels and sampling rate of your device.
    var sampleRate = audioContext.sampleRate;
    var duration = 2*sampleRate;
    var numChannels = 1;
    var buffer  = audioContext.createBuffer(numChannels, duration, sampleRate);
    // fill the channel with the desired frequency's data
    var channelData = buffer.getChannelData(0);
    /*for (var i = 0; i < sampleRate; i++) {
      //channelData[i]=Math.sin(2*Math.PI*frequency*i/(sampleRate));
      channelData[i]=2 * sin(frequency*i/(sampleRate));
    }*/
  
  	channelData = data;

    // create audio source node.
    var source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);

    // finally start to play
    source.start(0);
}
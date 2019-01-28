


let time = 0;
let a;
let m;

function setup() {
  
  createCanvas(400, 400);
  
  a = new tpoint(100 * sin(225 * 0.0174532925), 100 * cos(225 * 0.0174532925));
  m = new tpoint(0, 0);
  
}

function draw() {
  
  background(220);
  translate(200, 200);
  
  ellipse(0, 0, 200, 200);
  
  let efac = 100;
  let m = new tpoint(0, 0);
  let b = new tpoint(efac * cos(time), efac * sin(time));
  a.show();
  b.show();
  m.show();
  
  line(a.x, a.y, 0, 0);
  line(a.x, a.y, b.x, b.y);
  
  
  let am = new egf(a, m);
  let ab = new egf(a, b);
  
  let bc = changeq(am, b);
  let mc = changeq(ab, m);
  
  let c = intersect(bc, mc);
  c.show();
  
  line(b.x, b.y, c.x, c.y);
  line(m.x, m.y, c.x, c.y);
 
  
  time = time +  0.01;
  
}

function intersect(a, b){
  
  let rx, ry;
  
  rx = (-a.q + b.q) / (a.m - b.m);
  ry = a.val(rx);
  
  return new tpoint(rx, ry);
  
}

function changeq(f, input){
  
  let newq = input.y - f.m * input.x;
  
  return new egf(f.m, newq);
  
}


class egf{
  
  constructor(a, b){
    if(a instanceof tpoint){
      
    	this.m = (a.y - b.y) / (a.x - b.x);
    	this.q = a.y - this.m * a.x;
      
  	}
  	else{
      
    	this.m = a;
    	this.q = b;
    }
    
    //console.log(this.val(1));
    
  }
  
  val(input){
    
    return this.m * input + this.q;
    
  }
  
  
  
  
}




class tpoint{

  constructor(mx, my){
    
    this.x = mx;
    this.y = my;
    
  }
  
  show(){
    
    ellipse(this.x, this.y, 10, 10);
    
  }
  
}
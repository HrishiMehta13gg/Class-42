

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   
  // string data type 
  var name = "Rajeev"
  //number data type
  var grade = 8
  //boolean data type
  var invisibleGround = true
   console.log(name.length)
   console.log(name.toUpperCase())
   var score="1"
   score=parseInt(score)
   score=score + 1 
   console.log(score)
   console.log(12%5) 
   console.log("Hi" +" " + "Friend")                    
  var xyz = 4
if (xyz=== 4){
console.log("xyz=4")
}
var pkj;
console.log(pkj)
var object= null
console.log(object)

var name = "my Name";
switch(name) {  
case  "my name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");
}
for(var i=1; i<=5; i++){
	console.log(i)
}

var friends = ["friend1","friend2","friend3"]
console.log(friends[0])
friends.push("friend4")
friends.pop();
console.log(friends.length)
for(var index in friends){
	console.log(friends[index])}





















  }

function draw() {
  background(255,255,255);  
  drawSprites();
}
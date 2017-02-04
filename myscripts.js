    function changeColor(){
      document.getElementById("content").style.color="black";
    }
var operand1;
var operand2;

function getNumbers(){
  operand1 = Math.floor(Math.random() * 20) + 1;
  operand2 = Math.floor(Math.random() * 20) + 1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("results").innerHTML="";
}

function checkAnswer(){
  var userSum = document.getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  
  if(userSum == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Incorrect.";
  }
}
//Gallery
var pics = ["https://s-media-cache-ak0.pinimg.com/736x/0a/b8/01/0ab8016b4307a437df59eb935105668c.jpg",
           "https://s-media-cache-ak0.pinimg.com/originals/96/f3/07/96f307e172421ddaa7cd7e8e7e763db2.jpg",
           "https://s-media-cache-ak0.pinimg.com/originals/89/54/a1/8954a1e6c0ec70b5e02518cd6e8ec75d.jpg"
           ];

var picIndex = 0;

function goLeft(){
  if(picIndex > 0 ){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];
  }
  
}//end of function

function goRight(){
  if(picIndex < (pics.length - 1)){
    picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}
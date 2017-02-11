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
var pics = ["https://kpopquote.files.wordpress.com/2012/05/exo-k-mama.jpg",
           "http://vignette3.wikia.nocookie.net/thelostplanet/images/9/96/EXO-M_MAMA.jpg/revision/latest?cb=20150601125442",
           "https://tryalittlekpop.files.wordpress.com/2013/05/exo_teaser_011.jpg",
            "https://1.soompi.io/wp-content/uploads/2013/08/EXO2.jpg",
            "http://images.8tracks.com/cover/i/001/557/490/cover_copy-6657.png?rect=0,0,500,500&q=98&fm=jpg&fit=max",
            "http://images.uk.kpopstarz.com/data/images/full/13152/exo.png",
            "http://cdn.koreaboo.com/wp-content/uploads/2015/04/EXO-e1427939387848.jpg",
            "http://www.asianjunkie.com/wp-content/uploads/2015/05/EXONewYorkYankees.jpg",
            "https://1.soompi.io/wp-content/uploads/2015/12/exo-sing-for-you-teaser-img-1.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/4b/37/a7/4b37a73ed1d53e325fbdea14e6e05260.jpg",
            "http://celebmix.com/wp-content/uploads/2016/08/exos-latest-music-video-lotto-is-here-01.jpg",
            "http://images.kpopstarz.com/data/thumbs/full/499249/600/0/0/0/exo-will-never-let-go-their-fans-for-life-with-new-winter-mv.jpg"
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

var character="";

function chooseX(){
  character = 'X';
}

function chooseO(){
  character = 'O';
}

function makeMove(divLocation){
  
var insideDiv = document.getElementById(divLocation).innerHTML;  
  
  if(insideDiv === ""){
    document.getElementById(divLocation).innerHTML=character;
    document.getElementById("notes").innerHTML="";
  }
  else{
    document.getElementById("notes").innerHTML="Already made a move here." +
      "<p> Try another spot!</p>";
  }
 
  if(checkWinner()){
    document.getElementById("notes").innerHTML=character + "Congratulations! You've won!";
  }
  
}

function checkWinner(){
  var r1c1 = document.getElementById("row1col1").innerHTML;
  var r1c2 = document.getElementById("row1col2").innerHTML;
  var r1c3 = document.getElementById("row1col3").innerHTML;
  var r2c1 = document.getElementById("row2col1").innerHTML;
  var r2c2 = document.getElementById("row2col2").innerHTML;
  var r2c3 = document.getElementById("row2col3").innerHTML;
  var r3c1 = document.getElementById("row3col1").innerHTML;
  var r3c2 = document.getElementById("row3col2").innerHTML;
  var r3c3 = document.getElementById("row3col3").innerHTML;
  
  if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 !== "" ||
     r2c1 == r2c2 && r2c1 == r2c3 && r2c1 !== "" ||
     r3c1 == r3c2 && r3c1 == r3c3 && r3c1 !== "" || 
     r1c1 == r2c1 && r1c1 == r3c1 && r1c1 !== "" ||
     r1c2 == r2c2 && r1c2 == r3c2 && r1c2 !== "" ||
     r1c3 == r2c3 && r1c3 == r3c3 && r1c3 !== "" || 
     r1c1 == r2c2 && r1c1 == r3c3 && r1c1 !== "" ||
     r1c3 == r2c2 && r1c3 == r3c3 && r1c3 !== ""){
    return true;
  }
  else{
    return false;
  }
}
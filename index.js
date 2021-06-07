// random num 1<10
let randomNum = Math.floor(Math.random() * 10) + 1; 
// num multiplied with random num.
let num;





function times1() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 1;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;
  
}


function times2() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 2;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times3() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 3;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times4() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 4;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times5() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 5;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times6() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 6;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times7() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 7;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times8() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 8;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times9() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 9;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;

}

function times10() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  num = 10;
  document.getElementById('task').innerHTML = randomNum  + " " +  "x" + " " +  num
  return num * randomNum;
  
}


function timesR() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  let randomNum1 = Math.floor(Math.random() * 10) + 1; 
  document.getElementById('task').innerHTML = randomNum1  + " " +  "x" + " " +  randomNum
  return randomNum1 * randomNum;
}




function getAnswer() {
  let input1 = document.getElementById("inputAnswer").value;
  let sum = num * randomNum;
  if (input1 == sum ) {
  alert("Det er riktig!");
  } else {
  alert("Det er feil")
  }
  console.log(input1);
  
}  

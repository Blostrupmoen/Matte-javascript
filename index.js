document.querySelector('section.buttons').addEventListener('click', function (ev) {
  if (ev.target.getAttribute("times-table") == null) {
    return;
  }
  let randomNum = Math.floor(Math.random() * 10) + 1;
  let timesTable = ev.target.getAttribute("times-table");
  if (timesTable == 0) {
    document.getElementById('toggleRandom').value = "true";
  } else {
    document.getElementById('toggleRandom').value = "false";
  }

  setUpTask(randomNum, timesTable);
});


function getAnswer() {
  let a = document.getElementById('task').innerHTML;
  let multipliedNumber = a.split(" x ");
  let input1 = document.getElementById("inputAnswer").value;

  if (input1 == multipliedNumber[0] * multipliedNumber[1]) {
    alert("Det er riktig!");

    document.getElementById("inputAnswer").value = "";
  
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let timesTable = multipliedNumber[1];
    setUpTask(randomNum, timesTable);

    document.getElementById("streak").innerHTML += '<i class="bi bi-star-fill"></i>';

    


  }
  else {
    alert("Det er feil")
    document.getElementById("streak").innerHTML = "";
  }
}


function setUpTask(randomNum, timesTableNum) {
  if (document.getElementById('toggleRandom').value == "true") {
    timesTableNum = Math.floor(Math.random() * 10) + 1;
  }
  document.getElementById('task').innerHTML = randomNum + " " + "x" + " " + timesTableNum;
}
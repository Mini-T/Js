var cal = "";
console.log;
function affiche(elem) {
  cal = cal + elem;
  document.getElementById("zone").innerHTML = cal;
  console.log;
  alert("onclick event")
}

function suprall(elem) {
  cal = "";
  document.getElementById("zone").innerHTML = "0";
  console.log;
}

function suprim(elem) {
  cal = cal.substring(0, cal.length - 1);
  document.getElementById("zone").innerHTML = cal;
  if (cal === "") {
    document.getElementById("zone").innerHTML = "0";
    console.log; 
  }
  
}
function CalculFin(elem) {
  try {
    document.getElementById("zone").innerHTML = eval(cal);
    cal = "";
  } catch {
    document.getElementById("zone").innerHTML + "ERROR";
    console.log;
  }
 
}
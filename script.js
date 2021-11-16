//policital party variable
let anc = 0;
let da = 0;
let eff = 0;
let ifp = 0;
let actionsa = 0;
let icosa = 0;

function Vote() {

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const nationality = document.getElementById("nationality").value;
  const party = document.getElementById("party").value;


  console.log(nationality)

  ancDisplay = document.getElementById("ancTotal");
  daDisplay = document.getElementById("daTotal");
  effDisplay = document.getElementById("effTotal");
  ifpDisplay = document.getElementById("ifpTotal");
  actionsaDisplay = document.getElementById("actionsaTotal");
  icosaDisplay = document.getElementById("icosaTotal");

  


  alert(party);

  if (name == " ") {
    alert("Please provide your name");
    return;
  }

  if (age < 17) {
    alert("you are under, you cannot vote");
    return;
  }

  if (nationality == "Foreigner") {
    alert("only south africa can vote");
    return;
  }

  if (party == "party") {
    alert("which party won");
    return;
  }


  if (party == "ANC") {
    anc++;
    ancDisplay.innerHTML = anc;
    return;
  }

  if (party == "DA") {
    da++;
    daDisplay.innerHTML = da;
    return;
  }

  if (party == "EFF") {
    eff++;
    effDisplay.innerHTML = eff;
    return;
  }

  if (party == "IFP") {
    ifp++;
    ifpDisplay.innerHTML = ifp;
    return;
  }

  if (party == "ACTIONSA") {
    actionsa++;
    actionsaDisplay.innerHTML = actionsa;
    return;
  }

  if (party == "ICOSA") {
    icosa++;
    icosaDisplay.innerHTML = icosa;
    return;
  }



 document.getElementById('anc').innerHTML = anc;
 document.getElementById('da').innerHTML = da;
 document.getElementById('eff').innerHTML = eff;
 document.getElementById('ifp').innerHTML = ifp;
 document.getElementById('actionsa').innerHTML = actionsa;
 document.getElementById('icosa').innerHTML = icosa;

 for (let i = 0; i < party.length; i++) {
   if ((party[i].number == number)) {
     display.innerHTML += "party" + party[i].number + "party";
   }
 } 

}

 







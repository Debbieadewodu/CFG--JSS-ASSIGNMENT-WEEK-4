/*js*/
function ClicktoBegin() {

let name= prompt("What is your name?");

let rsvp= prompt("What do you have in mind today? (bag or perfume?)");

if(rsvp === "perfume"){
  alert("Yay,thats on my mind too. Lets shop!");
}
else if(rsvp === "bag") {
  alert("Awww, but I love perfumes...");
  
}
else if(rsvp ==="") {
  alert("Please insert a valid item and restart");
}
  let money = prompt("What is your budget today?");
  
if(money <=300){
  alert("Great! Spend more and you qualify for a discount!");
    document.getElementById("shop").innerHTML = name + " would like to shop and will spend $" + money + ".";
}

else if(money >= 500) {
  alert("Thats huge! Happy Spending!");
  document.getElementById("shop").innerHTML = name + " would like to shop and will spend $" + money + ".";
}
else {
  alert("Please insert a valid number and restart");
}
}
console.log(rsvp);
console.log(name);
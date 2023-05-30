try{
const vegAdult = document.getElementById("vegAdult");
const vegKids = document.getElementById("vegKids");
const nonVegAdult=document.getElementById("nonVegAdult");
const nonVegKids=document.getElementById("nonVegKids");
const customerName = document.getElementById("customerName");

function billCalculation(){
    event.preventDefault();
    const vegAdultValue=parseInt(vegAdult.value)
    const vegKidsValue=parseInt(vegKids.value);
    const nonVegAdultValue=parseInt(nonVegAdult.value);
    const nonVegKidsValue=parseInt(nonVegKids.value);

    const totalPeople=vegAdultValue+vegKidsValue+nonVegAdultValue+nonVegKidsValue;
    const originalPrice= vegAdultValue*599+vegKidsValue*249+nonVegAdultValue*699+nonVegKidsValue*349;
    const gstAmount = originalPrice*12/100
    const totalPrice= totalPeople>=10?(originalPrice+gstAmount)*90/100:(originalPrice+gstAmount);
    document.getElementById("result").innerHTML= "Hai "+`${customerName.value}`+", You have to pay Rs."+`${totalPrice.toFixed(2)}`+".Thanks for comming!"; 

}
let clear= document.getElementById('result');
function clearData(){
   clear.innerHTML =" ";
};
}
catch(e){
 console.log(error);
}
     

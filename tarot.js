const tarotCard = [4,5,6,7];
/* console.log(tarotCard[3]);

//creates a random number between 0 and 1 
const index = Math.random();
console.log(index);*/


function pickRandomCard() {
    const index = Math.random();
    const max = 3;
    const min = 0;
    const cardNumber = Math.floor (index * (max - min ) + min);
return cardNumber;
}

console.log("randomCard", pickRandomCard());


function drawACard() {
console.log(pickRandomCard());

const img = document.querySelector(".picked-card img");
img.src = `card-${pickRandomCard()}.jpg`;
const container = document.querySelector(".picked-card");
//adding something to the class list
container.classList.add("show");
console.log(img.src);


//const el = document.querySelector(".picked-card")
//el.innerHTML = pickRandomCard();
//console.log(el);

}

function shuffleCard() {

    const container = document.querySelector(".picked-card");
        container.classList.remove("show");
}
// this is the max and min numbers we can call
//const max = 77;

//const min = 0;

//math floor gets rid of the decimal
//const cardNumber = Math.floor (index * (max - min ) + min);
//console.log("cardNumber", cardNumber);

// if statements that round up or below depending on the statements below
/*if(index >= 0 && index <= 0.25) {
console.log(tarotCard[0]);

}

if(index > 0.25 && index <= 0.5) {

console.log(tarotCard[1]);

}

if(index > 0.50 && index <= 0.75) {

    console.log(tarotCard[2]);
    
    }

if(index > 0.75 && index <= 1) {

    console.log(tarotCard[3]);
        
        }

console.log(Math.random());*/


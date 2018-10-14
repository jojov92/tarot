const tarotCardDesc= [ { 
                    src: 'card-0.jpg',
                    desc: 'This is the Queen of Cups tarot card'
                }, 
                {src: 'card-1.jpg',
                    desc: 'This is the Fool tarot card'
            }, 

                {src: 'card-2.jpg',
                    desc: 'This is the Star tarot card'
                }, 

                {src: 'card-3.jpg',
                    desc: 'This is the Hanged Man tarot card'
                } ];
  
/* console.log(tarotCard[3]);

//creates a random number between 0 and 1 
const index = Math.random();
console.log(index);*/


function pickRandomCard1() {
    const index = Math.random();
    const max = 4;
    const min = 0;
    const cardNumber = Math.floor (index * (max - min ) + min);
return cardNumber;
}

//console.log("randomCard", pickRandomCard1());


function drawACard() {
console.log(pickRandomCard1());
const pickRandomCard = pickRandomCard1();


const img = document.querySelector(".picked-card img");
//calling random card 
img.src = `card-${pickRandomCard}.jpg`;
const container = document.querySelector(".picked-card");
//adding something to the class list
container.classList.add("show");
console.log(img.src);
console.log(tarotCardDesc[pickRandomCard]);

const hide = document.querySelector(".card-description");
        hide.classList.remove("hide");


const cardDescription = document.querySelector(".card-description")
//it will pick a random card but also show the accompanying description
cardDescription.innerHTML = tarotCardDesc[pickRandomCard].desc;
console.log(cardDescription);

}

function shuffleCard() {

    const container = document.querySelector(".picked-card");
        container.classList.remove("show");
       
        const hide = document.querySelector(".card-description");
        hide.classList.add("hide");
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


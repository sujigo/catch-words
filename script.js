const fruitsDB = ["Apples", "Apricots", "Avocados", "Bananas", "Boysenberries", "Blueberries", "Cherry", "Cherries", "Cantaloupe", "Clementine", "Cucumbers", "Plum", "Pluots", "Dates", "Dewberries", "Dragon Fruit", "Elderberry", "Eggfruit", "Entawak", "Fig", "Farkleberry", "Finger Lime", "Grapefruit", "Grapes", "Gooseberries", "Guava", "Melon", "Hackberry", "Imbe", "Fig", "Jackfruit", "Jambolan", "Kiwi", "Kaffir Lime", "Kumquat", "Lime", "Lemon", "Longan", "Lychee", "Loquat", "Mango", "Mulberry", "Melon", "Nectarine", "Orange", "Pear", "Olive", "Oranges", "Papaya", "Persimmon", "Peach", "Pomegranate", "Pineapple", "Passion Fruit", "Quince", "Cherry", "Rambutan", "Raspberries", "Star Fruit", "Strawberries", "Watermelon", "Tomato", "Tangerine", "Tamarind", "Ugni", "Voavanga", "Watermelon", "Wolfberry", "Yangmei", "Zucchini"];
const colors = ["Yellow", "Cyan", "Magenta", "Chartreuse", "Orange"];

const startBtn = document.getElementById("start");
const move0El = document.getElementById("move--0");
const move1El = document.getElementById("move--1");
const move2El = document.getElementById("move--2");
const move3El = document.getElementById("move--3");
const typed = document.getElementById("typed");
const words = document.getElementsByClassName("words");
const scoreEl = document.getElementById("score");
const attemptEl = document.getElementById("attempt");
const timeEl = document.getElementById("time");
const hide = document.querySelector(".movingWords");

let fruits = ["Apple", "Banana", "Grape", "Kiwi"];
let score = 0;
let attempt = 0;
var seconds = 60;

function answerCheck(typed){
    if(fruits.includes(typed)){
        const radomIndex = Math.floor(Math.random()*fruitsDB.length);
        const radomColorIndex = Math.floor(Math.random()*colors.length);
        const matchedItemIndex = fruits.indexOf(typed);
        
        document.getElementById(`word--${matchedItemIndex}`).style.color = colors[radomColorIndex];
        document.getElementById(`word--${matchedItemIndex}`).innerHTML = fruitsDB[radomIndex];

        fruits[matchedItemIndex] = fruitsDB[radomIndex];
        score ++;

        scoreEl.innerHTML = `Score: ${score}`;
    };
    attempt++;
    attemptEl.innerHTML = `Total Attempt: ${attempt}`;   
};

function countdown() {
    var timer = setInterval(function(){
        startBtn.disabled = true;
        seconds--;
        timeEl.innerHTML = "Time left: " + seconds;
        if (seconds === -1) {
            const finalScore = score / 60;
            alert(`Game over! Your got ${finalScore.toFixed(2)} fruits per second!`);
            window.location.reload();	
        }    
    }, 1000);
};


startBtn.addEventListener("click", function(){
    countdown();
    hide.classList.remove("hidden");
    move0El.classList.add("move", "move--0");
    move1El.classList.add("move", "move--1");
    move2El.classList.add("move", "move--2");
    move3El.classList.add("move", "move--3");

    typed.addEventListener("keyup", function(event) {
        if (event.code === "Enter") {
            answerCheck(typed.value);
    
            event.preventDefault();
            event.currentTarget.value = "";
        };
    
    });
})
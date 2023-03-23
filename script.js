// variables 

let btn=document.querySelector('#new-quote');
// console.log(btn);
let quote=document.querySelector('.Benifit');
// console.log(quote);

let pic=document.querySelector('.img');


let quotes=['Tree Provide Fresh air to us','Tree Give us Fruits and Flowers','Makes our environment beautiful','Tree helps in bring rain to earth'];


    btn.addEventListener('click',function(){
        let random=Math.floor(Math.random()* quotes.length);
        quote.innerText=quotes[random];
    })


// Присвоение 

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// Обработчик события
btn.addEventListener('click', function(){
   
 // получение рандомного числа от 0 до 3-х  
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
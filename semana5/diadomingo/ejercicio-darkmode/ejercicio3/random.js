const colors = ["hsl(205,96%,17%)","hsl(205,86%,27%)","hsl(205,76%,37%)","hsl(205,66%,47%)","hsl(205,56%,57%)","hsl(205,46%,67%)","hsl(205,36%,77%)"]


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = color[randomNumber];
    color.textContent = colors[randomNumber]

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

const button = document.querySelector('.btn');
const colorValue = document.querySelector('.colorValue');
const hexValue = document.querySelector('.hexValue');

var background = document.querySelector('.background')



const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    background.style.backgroundColor = "#" + randomColor;
    hexValue.innerHTML = `#${randomColor}`;

}

button.addEventListener("click", setBg);
setBg();
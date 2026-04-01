const backgrounds = [
    '26bg01.jpg', '26bg02.jpg'
];

const colors = [
    '#eaeaea', '#f5f0e6', '#e8e4dc', '#f0ebe1'
];

// Функция случайного выбора
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Случайно выбираем фон и цвет
const randomBg = random(backgrounds);
const randomColor = random(colors);

// Применяем цвет фона
document.body.style.backgroundColor = randomColor;

// Применяем фон страницы
document.body.style.backgroundImage = `url('images/${randomBg}')`;

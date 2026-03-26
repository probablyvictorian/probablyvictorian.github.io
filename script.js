// Массивы с файлами
const logos = [
    'pv_lg_01.svg', 'pv_lg_02.svg', 'pv_lg_03.svg', 'pv_lg_04.svg',
    'pv_lg_05.svg', 'pv_lg_06.svg', 'pv_lg_07.svg', 'pv_lg_08.svg',
    'pv_lg_09.svg', 'pv_lg_10.svg', 'pv_lg_11.svg', 'pv_lg_12.svg',
    'pv_lg_13.svg', 'pv_lg_14.svg', 'pv_lg_15.svg', 'pv_lg_16.svg'
];

const backgrounds = [
    'lg_bg_1.jpg', 'lg_bg_2.jpg', 'lg_bg_3.jpg', 'lg_bg_4.jpg'
];

const colors = [
    '#eaeaea', '#f5f0e6', '#e8e4dc', '#f0ebe1'
];

// Функция случайного выбора
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Случайно выбираем элементы
const randomLogo = random(logos);
const randomBg = random(backgrounds);
const randomTexture = random(backgrounds);
const randomColor = random(colors);

// Применяем цвет фона
document.body.style.backgroundColor = randomColor;

// Применяем фон страницы
document.body.style.backgroundImage = `url('images/${randomBg}')`;

// Загружаем SVG логотип
fetch(`images/${randomLogo}`)
    .then(response => response.text())
    .then(svgContent => {
        // Вставляем SVG в контейнер
        const logoContainer = document.querySelector('.logo-container');
        logoContainer.innerHTML = svgContent;
        
        // Находим SVG
        const svg = logoContainer.querySelector('svg');
        
        // Удаляем встроенные стили из SVG
        const styleTag = svg.querySelector('style');
        if (styleTag) {
            styleTag.remove();
        }
        
        // Добавляем паттерн текстуры
        const defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        
        const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
        const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        
        pattern.setAttribute('id', 'logo-pattern');
        pattern.setAttribute('patternUnits', 'userSpaceOnUse');
        pattern.setAttribute('width', '100%');
        pattern.setAttribute('height', '100%');
        
        image.setAttribute('href', `images/${randomTexture}`);
        image.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        
        pattern.appendChild(image);
        defs.appendChild(pattern);
        
        if (!svg.querySelector('defs')) {
            svg.insertBefore(defs, svg.firstChild);
        }
        
        // Применяем паттерн ко всем элементам SVG
        const paths = svg.querySelectorAll('path, rect, circle, polygon, text, g');
        paths.forEach(el => {
            el.removeAttribute('class');
            el.setAttribute('fill', 'url(#logo-pattern)');
        });
    });

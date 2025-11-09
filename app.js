const seasons = document.querySelectorAll('button');
const monthsContainer = document.querySelector('.months');
const body = document.body;

const data = {
    winter: {
        months: ['декабрь', 'январь', 'февраль'],
        color: '#00bfff',
        bg: 'url(images/Winter.jpg)'
    },
    spring: {
        months: ['март', 'апрель', 'май'],
        color: '#00cc66',
        bg: 'url(images/Spring.jpg)'
    },
    summer: {
        months: ['июнь', 'июль', 'август'],
        color: '#ffcc00',
        bg: 'url(images/Summer.jpeg)'
    },
    autumn: {
        months: ['сентябрь', 'октябрь', 'ноябрь'],
        color: '#ff6600',
        bg: 'url(Images/Autumn.jpeg)'
    }
};

for (const seasonBtn of seasons) {
    seasonBtn.addEventListener('click', function () {
    const selected = seasonBtn.dataset.season;
    const { months, color, bg } = data[selected];

    renderMonths(months, color);
    body.style.backgroundImage = bg;
    });
}

function renderMonths(months, color) {
    monthsContainer.innerHTML = ''; // очищаем старые месяцы
    for (let i = 0; i < months.length; i++) {
    const monthBlock = document.createElement('div');
    monthBlock.classList.add('month');
    monthBlock.textContent = months[i];
    monthBlock.style.backgroundColor = color;
    monthsContainer.appendChild(monthBlock);
    }
}
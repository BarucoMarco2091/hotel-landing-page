AOS.init();

$(document).ready(function () {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });
});

const foodData = [
    {
        "image": "../assets/farofa-bife.jpg",
        "paragrafo": "Farofa",
    },
    {
        "image": "../assets/pizza.png",
        "paragrafo": "Pizza",
    },
    {
        "image": "../assets/sushi.png",
        "paragrafo": "Sushi",
    },
]

const cardGrid = document.querySelector('.food-grid');
foodData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card-food';
    card.innerHTML =
    `
        <img class="food-img" src="${item.image}" alt="food" loading="lazy">
        <p class="food-name">${item.paragrafo}</p>
    `
    cardGrid.appendChild(card);
});


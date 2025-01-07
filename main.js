let cards = document.querySelectorAll('div.card-1, div.card-2, div.card-3, div.card-4');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}

function changeCardBackground() {
    cards.forEach((card) => {
        card.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`
        card.textContent = randomColor();
    })
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        changeCardBackground();
    }
})
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
        const textContainer = document.createElement('div')
        textContainer.classList.add('textContainer')
        const img = document.createElement('img');
        const link = document.createElement('a')
        img.src = '/assets/copy.svg'
        card.append(textContainer)
        link.append(img)
        textContainer.append(link)
        img.addEventListener('click', () => {
            navigator.clipboard.writeText(card.textContent)
            .then(() => {img.src="/assets/check.svg"}).then(setTimeout(() => {img.src="/assets/copy.svg"}, 3000))
        })

    })
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        changeCardBackground();
    }
})

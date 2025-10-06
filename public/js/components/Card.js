class Card {
    constructor(imageUrl, title, author, imageAlt = '') {
        this.imageUrl = imageUrl;
        this.title = title;
        this.author = author;
        this.imageAlt = imageAlt;
    }
    render() {
        return `
            <div class="card">
                <img src="${this.imageUrl}" alt="${this.imageAlt}">
                <div class="card-text">
                    <p>${this.title}</p>
                    <span>${this.author}</span>
                </div>
            </div>
        `;
    }

    createElement() {
        const cardContainer = document.createElement('div');
        cardContainer.innerHTML = this.render();
        return cardContainer.firstElementChild;
    }
}

class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
        if (this.container) {
            this.container.appendChild(card.createElement());
        }
    }

    addCards(cards) {
        cards.forEach(card => this.addCard(card));
    }

    render() {
        if (!this.container) return;
        
        this.container.innerHTML = '';
        this.cards.forEach(card => {
            this.container.appendChild(card.createElement());
        });
    }
}
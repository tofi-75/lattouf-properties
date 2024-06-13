const cardData = {
    "t3Sunlight": {
        imgSrc: "../img/properties/t3-sunlight-front-bottom-1.jpg",
        altText: "T3 Sunlight Front View",
        title: "T3 Sunlight",
        text: "Modern elegance meets convenience in Larnaca's heart, offering spacious living and scenic views, moments from vibrant city life.",
        linkHref: "./properties/sunlight-property.html",
        buttonText: "More info"
    },
    "t3Sunwave": {
        imgSrc: "../img/properties/t3-sunwave-front-side-2.jpg",
        altText: "T3 Sunwave Front View",
        title: "T3 Sunwave",
        text: "Luxurious living in Larnaca, with open views and serene surroundings, close to conveniences and just minutes from the beach and airport.",
        linkHref: "./properties/sunshine-property.html",
        buttonText: "More info"
    },
    "t3Sunray": {
        imgSrc: "../img/properties/t3-sunray-front-1.jpg",
        altText: "T3 Sunray Front View",
        title: "T3 Sunray",
        text: "Sunray combines elegance with comfort, set against the backdrop of a tranquil neighborhood.",
        linkHref: "./properties/sunray-property.html",
        buttonText: "More info"
    },
    "t3Sunshine": {
        imgSrc: "../img/properties/t3-sunshine-side-2.jpg",
        altText: "T3 Sunshine Side View",
        title: "T3 Sunshine",
        text: "A beacon of design and efficiency near the Marina, delivering high returns and solar-powered living, completed with precision in May 2022.",
        linkHref: "./properties/sunshine-property.html",
        buttonText: "More info"
    },
    "t3Sunrise": {
        imgSrc: "../img/properties/t3-sunrise-side-top-1.jpg",
        altText: "T3 Sunrise Side Top View",
        title: "T3 Sunrise",
        text: "Chic living meets upscale locale in Aradippou, with exclusive two-bedroom apartments and rooftop gardens, fully realized in October 2019.",
        linkHref: "./properties/sunrise-property.html",
        buttonText: "More info"
    }
};

function loadCards(cardKeys) {
    loadCards('cards-container',cardKeys)
}

function loadCards(cardsContainter,cardKeys) {
    const container = document.getElementById(cardsContainter);
    let cardsHTML = '';

    cardKeys.forEach(key => {
        const card = cardData[key];
        if (card) {
            cardsHTML += `
                <div class="card p-2 col-sm" style="width: 18rem;">
                    <img src="${card.imgSrc}" class="card-img-top" alt="${card.altText}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <div class="d-flex justify-content-center">
                            <a href="${card.linkHref}" class="btn btn-primary center">${card.buttonText}</a>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = cardsHTML;
}

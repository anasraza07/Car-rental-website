const popularCars = [{
    carName: {
        name: 'Koenigsegg',
        type: 'sport'
    },
    carImage: 1,
    spesification: {
        gasoline: '90L',
        automation: 'Manual',
        capacity: '2 People'
    },
    price: {
        currentPrice: 99,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'Nissan GT - R',
        type: 'sport'
    },
    carImage: 2,
    spesification: {
        gasoline: '80L',
        automation: 'Manual',
        capacity: '2 People'
    },
    price: {
        currentPrice: 80,
        prevPrice: 100
    }
}, {
    carName: {
        name: 'Rolls - Royce',
        type: 'Sedan'
    },
    carImage: 3,
    spesification: {
        gasoline: '70L',
        automation: 'Manual',
        capacity: '4 People'
    },
    price: {
        currentPrice: 96,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'Nissan GT - R',
        type: 'sport'
    },
    carImage: 4,
    spesification: {
        gasoline: '80L',
        automation: 'Manual',
        capacity: '2 People'
    },
    price: {
        currentPrice: 80,
        prevPrice: 100
    }
},]

const recommendationCars = [{
    carName: {
        name: 'All New Rush',
        type: 'SUV'
    },
    carImage: 1,
    spesification: {
        gasoline: '70L',
        automation: 'Manual',
        capacity: '6 People'
    },
    price: {
        currentPrice: 72,
        prevPrice: 80
    }
}, {
    carName: {
        name: 'CR - V',
        type: 'SUV'
    },
    carImage: 2,
    spesification: {
        gasoline: '80L',
        automation: 'Manual',
        capacity: '6 People'
    },
    price: {
        currentPrice: 80,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'All New Terios',
        type: 'SUV'
    },
    carImage: 3,
    spesification: {
        gasoline: '90L',
        automation: 'Manual',
        capacity: '6 People'
    },
    price: {
        currentPrice: 74,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'CR - V',
        type: 'SUV'
    },
    carImage: 4,
    spesification: {
        gasoline: '80L',
        automation: 'Manual',
        capacity: '6 People'
    },
    price: {
        currentPrice: 80,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'MG ZX Exclusice',
        type: 'Hatchback'
    },
    carImage: 1,
    spesification: {
        gasoline: '70L',
        automation: 'Manual',
        capacity: '4 People'
    },
    price: {
        currentPrice: 76,
        prevPrice: 80
    }
}, {
    carName: {
        name: 'New MG ZS',
        type: 'SUV'
    },
    carImage: 6,
    spesification: {
        gasoline: '80L',
        automation: 'Manual',
        capacity: '6 People'
    },
    price: {
        currentPrice: 80,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'MG ZX Excite',
        type: 'Hatchback'
    },
    carImage: 7,
    spesification: {
        gasoline: '90L',
        automation: 'Manual',
        capacity: '4 People'
    },
    price: {
        currentPrice: 74,
        prevPrice: 0
    }
}, {
    carName: {
        name: 'New MG ZS',
        type: 'SUV'
    },
    carImage: 8,
    spesification: {
        gasoline: '80L',
        automation: 'Manual',
        capacity: '6 People'
    },
    price: {
        currentPrice: 80,
        prevPrice: 0
    }
},]


let popularCarHTML = '';
popularCars.forEach(car => {
    popularCarHTML += `
        <div class="catalog">
            <div class="catalog-main">
                <div class="name-and-like">
                    <div class="car-name">
                        <div class="name">${car.carName.name}</div>
                        <div class="type">${car.carName.type}</div>
                    </div>
                    <div class="like-icon">
                        <img src="./img/catalog-heart-icon.png" alt="">
                    </div>
                </div>
                <div class='car-image-container'>
                    <img src="./img/carImages/recommendation/Car-${car.carImage < 10 ? ('0' + String(car.carImage)) : car.carImage}.png" alt="">
                </div>
                <div class="spesification">
                    <div class="item" id="gasoline">
                        <img src="./img/gasoline.png" alt="">
                        <div class="text">${car.spesification.gasoline}</div>
                    </div>
                    <div class="item" id="car-type">
                        <img src="./img/car-type.png" alt="">
                        <div class="text">${car.spesification.automation}</div>
                    </div>
                    <div class="item" id="capacity">
                        <img src="./img/capacity.png" alt="">
                        <div class="text">${car.spesification.capacity}</div>
                    </div>
                </div>
            </div>
            <div class="catalog-footer">
                <div class="price">$${car.price.currentPrice.toFixed(2)}/ 
                    <span>day</span>
                    ${car.price.prevPrice ? `<div class="strike-text"><del>$${car.price.prevPrice.toFixed(2)}</del></div>` : ''}
                </div>
                <button class="rental-btn">Rent Now</button>
            </div>
            <div class="shadow"></div>
        </div>
    `;
})

console.log(popularCarHTML);

document.querySelector('#js-popular-car-items')
    .innerHTML = popularCarHTML;

let recommendationCarHTML = '';
recommendationCars.forEach(car => {
    recommendationCarHTML += `
        <div class="catalog">
            <div class="catalog-main">
                <div class="name-and-like">
                    <div class="car-name">
                        <div class="name">${car.carName.name}</div>
                        <div class="type">${car.carName.type}</div>
                    </div>
                    <div class="like-icon">
                        <img src="./img/catalog-heart-icon.png" alt="">
                    </div>
                </div>
                <div class="car-image-container">
                    <img src="./img/carImages/recommendation/Car-${car.carImage < 10 ? ('0' + String(car.carImage)) : car.carImage}.png" alt="">
                </div>
                <div class="spesification">
                    <div class="item" id="gasoline">
                        <img src="./img/gasoline.png" alt="">
                        <div class="text">${car.spesification.gasoline}</div>
                    </div>
                    <div class="item" id="car-type">
                        <img src="./img/car-type.png" alt="">
                        <div class="text">${car.spesification.automation}</div>
                    </div>
                    <div class="item" id="capacity">
                        <img src="./img/capacity.png" alt="">
                        <div class="text">${car.spesification.capacity}</div>
                    </div>
                </div>
            </div>
            <div class="catalog-footer">
                <div class="price">$${car.price.currentPrice.toFixed(2)}/ 
                    <span>day</span>
                    ${car.price.prevPrice ? `<div class="strike-text"><del>$${car.price.prevPrice.toFixed(2)}</del></div>` : ''}
                </div>
                <button class="rental-btn">Rent Now</button>
            </div>
            <div class="shadow"></div>
        </div>
    `;
})

console.log(recommendationCarHTML);

document.querySelector('#js-recommendation-car-items')
    .innerHTML = recommendationCarHTML;
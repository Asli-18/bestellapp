function getCategoryTemplate(index) {
    return `<div id="${desserts[index].category}">
                <img id="dessertCover" class="dessertCover" src="${desserts[index].cover}" alt="${desserts[index].category}">
                <h3 id="" class="categoryName"> ${desserts[index].category}</h3>
            </div>`;
}

function getDessertCardTemplate(index, j) {
    return `<div class="dessertDiv">
                <div class="dessertCard">
                    <h3 class="nameDessert">${desserts[index].types[j].name}</h3>
                    <p class="descriptionDessert">${desserts[index].types[j].description}</p>
                    <span class="priceDessert">${desserts[index].types[j].price.toFixed(2).replace('.', ',')} €</span>
                </div>
                <button onclick="addToBasket('${desserts[index].category}', '${desserts[index].types[j].name}')" class="addBtn">+</button>
            </div> `;
}

function getBasketTemplate(basket, i) {
    return `<div class="basketItem">
                <h4 class="nameItem">${basket.name}</h4>
                <div class="divItem">
                    <button onclick="reduceQuantity('${i}')" class="reduceIncreaseBtn">-</button>
                    <p class="priceAndQuantityItem">${basket.quantity}</p>
                    <button onclick="increaseQuantity('${i}', 'priceItem${i}', '${basket.quantity}', '${basket.price}')" class="reduceIncreaseBtn">+</button>
                    <p id="priceItem${i}" class="priceAndQuantityItem"></p>
                    <button onclick="deleteItem('${i}')" class="trashBtn"><img class="trashImg" src="./assets/icons/trash.svg" alt=""></button>
                </div>
                <div><p>Einzelpreis: ${basket.price.toFixed(2).replace('.', ',')} €</p>
                <div id="bigOrder" class="bigOrder"></div>
                </div>
            </div>
            `;
}

function getTemplateSum(subtotal, deliveryCosts, total) {
    return `<div class="sumContentMobil">
                <p class="sum">Zwischensumme: ${subtotal} €</p> <br>
                <p class="sum">Lieferkosten: ${deliveryCosts} €</p><br>
                <p class="sum">Gesamtsumme: ${total} €</p>
            </div>`;
}

function getBigOrderTemplate() {
    return `<p>Für größere Bestellungen bitte kontaktiere uns telefonisch!</p>`;
}

function getOrderBoxMessageTemplate() {
    return `<p class="orderBoxMessage">Füge Köstlichkeiten in dein Einkaufskorb hinzu!</p>`;
}

function getOrderBtnTemplate() {
    return `<button onclick="sendOrder()" id="orderBtn" class="orderBtn">Bestellen</button>`;
}

function getThxOrderTemplate(){
    return `<p class="orderBoxMessage">Danke für deine Bestellung!</p>`;
}
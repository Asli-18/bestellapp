function init() {
    getFromLocalStorage();
    updateBasketDisplay();
    render();
}

function render() {
    let dessertRef = document.getElementById('contentDesserts');

    for (let index = 0; index < desserts.length; index++) {
        dessertRef.innerHTML += getCategoryTemplate(index);
        for (let j = 0; j < desserts[index].types.length; j++) {
            dessertRef.innerHTML += getDessertCardTemplate(index, j);
        }
    }
}

function addToBasket(categoryName, dessertName) {
    let category = desserts.find(d => d.category === categoryName);
    let dessert = category.types.find(d => d.name === dessertName);
    let item = basket.find(d => d.name === dessert.name);
    if (item) {
        if (item.quantity < 20) {
            item.quantity += 1;
        } else {
            updateBasketDisplay();
        }
    } else {
        basket.push({ ...dessert, quantity: 1 });
    }
    updateBasketDisplay();

}

function updateBasketDisplay() {
    let basketDiv = document.getElementById("basket");
    basketDiv.innerHTML = "";

    if (basket.length === 0) {
        basketDiv.innerHTML = getOrderBoxMessageTemplate();
        document.getElementById('sumContent').classList.add('dNone');
        document.getElementById('orderDiv').classList.add('dNone');
        document.getElementById('basketCount').classList.add('dNone');
        document.getElementById('basketCount').innerText = "";
    } else {
        allCalc();
    }
    // basketCount(total);
    saveToLocalStorage();
}

function allCalc() {
    let basketDiv = document.getElementById("basket");
    for (let i = 0; i < basket.length; i++) {
        document.getElementById('sumContent').classList.remove('dNone');
        document.getElementById('orderDiv').classList.remove('dNone');
        document.getElementById('basketCount').classList.remove('dNone');
        basketDiv.innerHTML += getBasketTemplate(basket[i], i);
        unitPrice(i);


    }
    updatePriceDisplay();
    orderBtn();
}

function unitPrice(i) {
    let priceRef = document.getElementById(`priceItem${i}`);
    let totalLine = (basket[i].price * basket[i].quantity).toFixed(2).replace('.', ',');
    priceRef.innerText = `${totalLine} €`;
    saveToLocalStorage();
}

function calcSubtotal() {
    let totalSum = 0;
    for (let i = 0; i < basket.length; i++) {
        totalSum += basket[i].price * basket[i].quantity;
    }
    return totalSum.toFixed(2).replace('.', ',');
}

function calcTotal() {
    let subtotal = Number(calcSubtotal().replace(',', '.'));
    let deliveryCosts = 4.99;
    let total = subtotal + deliveryCosts;
    return total.toFixed(2).replace('.', ',');
}

function updatePriceDisplay() {
    let priceRef = document.getElementById('sumContent');
    priceRef.innerHTML = "";

    let subtotal = calcSubtotal();
    let total = calcTotal();
    let deliveryCosts = Number(4.99).toFixed(2).replace('.', ',');

    priceRef.innerHTML = getTemplateSum(subtotal, deliveryCosts, total);
    basketCount(total);
    saveToLocalStorage();
}

function basketCount(total) {
    let counterRef = document.getElementById('basketCount');
    if (basket.length >= 1) {
        counterRef.classList.remove('dNone');
        counterRef.innerText = `${total}€`;
    } else{
        counterRef.classList.add('dNone');
        counterRef.innerText = "";
    }
}

function orderBtn() {
    let orderRef = document.getElementById('orderDiv');
    if (basket.length >= 1) {
        orderRef.innerHTML = getOrderBtnTemplate();
    }
}

function sendOrder(i) {
    let message = document.getElementById('basket');
    if (basket.length > 0) {
        message.innerHTML = getThxOrderTemplate();
        basket.splice(i, 25);
        document.getElementById('sumContent').classList.add('dNone');
        document.getElementById('orderBtn').classList.add('dNone');
        document.getElementById('basketCount').classList.add('dNone');
    }
    saveToLocalStorage();
}

function reduceQuantity(i) {
    if (basket[i].quantity > 1) {
        basket[i].quantity--;
    } else {
        basket.splice(i, 1);
    }
    updateBasketDisplay();
}

function increaseQuantity(i) {
    if (basket[i].quantity < 20) {
        basket[i].quantity++;
    }
    updateBasketDisplay();
}

function deleteItem(i) {
    if (i >= 0 && i < basket.length) {
        basket.splice(i, 1);
        updateBasketDisplay();
    } else {

    }
}

function saveToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getFromLocalStorage() {
    let storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
        basket = JSON.parse(storedBasket);
    }
}
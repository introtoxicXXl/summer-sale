function getPrice(id){
    const textPrice = document.getElementById(id).innerText;
    const price = parseFloat(textPrice);
    return price;
}
function addToCart(id, name) {
    const productNameContainer = document.getElementById('product-name-container');
    const price = getPrice(id);
    const addPrice = getPrice('add-price');
    const newPrice = (price + addPrice).toFixed(2);
    document.getElementById('add-price').innerText = newPrice;
    document.getElementById('total-price').innerText = newPrice;

    const p = document.createElement('p');
    p.innerHTML = `<p class="text-2xl font-medium">${productNameContainer.childElementCount + 1} ${name}</p>`;
    productNameContainer.appendChild(p);

    if (newPrice > 0) {
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    if (newPrice >= 200) {
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
}
function coupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponValue = couponInput.value;
    document.getElementById('coupon-input').value = '';
    const addPrice = getPrice('add-price');

    if (couponValue === 'SELL200') {
        const discountPrice = (addPrice * 0.2).toFixed(2);
        document.getElementById('discount-price').innerText = discountPrice;
        document.getElementById('total-price').innerText = (addPrice - discountPrice).toFixed(2);
    } else {
        alert('Please Write Valid Coupon Code');
    }

}
function goHome() {
    window.location.href = 'index.html';
}


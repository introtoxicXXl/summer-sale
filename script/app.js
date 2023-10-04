function addToCart(id, name) {
    const textPrice = document.getElementById(id).innerText;
    const textAddPrice = document.getElementById('add-price').innerText;
    const productNameContainer = document.getElementById('product-name-container');
    const price = parseFloat(textPrice);
    const addPrice = parseFloat(textAddPrice);
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
    const addPrice = parseFloat(document.getElementById('add-price').innerText);
    console.log(addPrice)

    if (couponValue === 'SELL200') {
        const textDiscountPrice = document.getElementById('discount-price').innerText;
        const discountPrice = (addPrice * 0.2).toFixed(2);
        document.getElementById('discount-price').innerText = discountPrice;
        document.getElementById('total-price').innerText = (addPrice - discountPrice).toFixed(2);
    } else {
        alert('Please Write Valid Coupon Code');
    }

}
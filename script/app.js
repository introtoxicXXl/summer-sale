

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
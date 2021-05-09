let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Blue Tshirt',
        tag: 'bluetshirt',
        price: 10,
        inCart: 0
    },
    {
        name: 'Grey Hoddie',
        tag: 'greyhoddie',
        price: 20,
        inCart: 0
    },
    {
        name: 'Black Hoddie',
        tag: 'blackhoddie',
        price: 25,
        inCart: 0
    }
]

for(let item = 0; item < carts.length; item++){
    carts[item].addEventListener('click', () => {
        cartNumbers();
    });
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

}

onLoadCartNumbers();
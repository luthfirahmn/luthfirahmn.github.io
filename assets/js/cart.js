const products = [{
        id: 1,
        name: 'VZUU Mild & Deep Cleansing Pad',
        size: '250 gr',
        desc: 'Pad pembersih mendalam kami dirancang secara ahli untuk menghilangkan makeupdankotoran harian sambil membuka pori-pori dan meningkatkan tekstur kulit tanpa iritasi.',
        priceShow: 'Rp 479.000,00',
        price: 479000,
        img: '../assets/img/627.png'
    },
    {
        id: 2,
        name: 'Hydrating & Soothing',
        size: '250 gr',
        desc: 'Pad pembersih mendalam kami dirancang secara ahli untuk menghilangkan makeupdankotoran harian sambil membuka pori-pori dan meningkatkan tekstur kulit tanpa iritasi.',
        priceShow: 'Rp 429.000,00',
        price: 429000,
        img: '../assets/img/628.png'
    },
    {
        id: 3,
        name: 'Anti-Oxidant',
        size: '250 gr',
        desc: 'Pad pembersih mendalam kami dirancang secara ahli untuk menghilangkan makeupdankotoran harian sambil membuka pori-pori dan meningkatkan tekstur kulit tanpa iritasi.',
        priceShow: 'Rp 479.000,00',
        price: 479000,
        img: '../assets/img/629.png'
    }
];


$(document).ready(function () {
    updateCartBadge();
});

function openCart() {
    var modals = new bootstrap.Modal($('#cartModal'))
    updateCartModal()
    modals.show();
}


function updateCartBadge() {
    const existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];

    const totalQuantity = existingCheckout.reduce((total, item) => total + item.quantity, 0);

    $('#cart-badge').text(totalQuantity);
}

function checkout(productId, quantity) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const checkoutData = {
            id: product.id,
            name: product.name,
            size: product.size,
            price: product.price,
            img: product.img,
            quantity: parseInt(quantity) // Parse quantity to integer
        };

        let existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];
        let itemExists = false;

        existingCheckout = existingCheckout.map(item => {
            if (item.id === productId) {
                item.quantity += parseInt(quantity); // Add quantity to existing quantity
                itemExists = true;
            }
            return item;
        });

        if (!itemExists) {
            existingCheckout.push(checkoutData);
        }

        localStorage.setItem('checkout', JSON.stringify(existingCheckout));
        updateCartBadge();
        updateCartModal();
    } else {
        console.error('Product not found.');
    }
}

// function checkout(productId, quantity) {
//     const product = products.find(p => p.id === productId);
    
//     if (product) {
//         const checkoutData = {
//             id: product.id,
//             name: product.name,
//             size: product.size,
//             price: product.price,
//             img: product.img,
//             quantity: parseInt(quantity) // Parse quantity to integer
//         };

//         let existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];
//         let itemExists = false;

//         existingCheckout = existingCheckout.map(item => {
//             if (item.id === productId) {
//                 item.quantity = parseInt(quantity); // Set quantity instead of adding
//                 itemExists = true;
//             }
//             return item;
//         });

//         if (!itemExists) {
//             existingCheckout.push(checkoutData);
//         }

//         localStorage.setItem('checkout', JSON.stringify(existingCheckout));
//         updateCartBadge();
//         updateCartModal();
//     } else {
//         console.error('Product not found.');
//     }
// }

// function checkout(productId, quantity) {
//     const product = products.find(p => p.id === productId);

//     if (product) {
//         const checkoutData = {
//             id: product.id,
//             name: product.name,
//             size: product.size,
//             price: product.price,
//             img: product.img,
//             quantity: quantity
//         };

//         let existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];
//         let itemExists = false;

//         existingCheckout = existingCheckout.map(item => {
//             if (item.id === productId) {
//                 item.quantity += quantity;
//                 itemExists = true;
//             }
//             return item;
//         });

//         if (!itemExists) {
//             existingCheckout.push(checkoutData);
//         }

//         localStorage.setItem('checkout', JSON.stringify(existingCheckout));
//         updateCartBadge();
//         updateCartModal();
//     } else {
//         console.error('Product not found.');
//     }
// }

function beli_langung(productId, quantity) {
    const product = products.find(p => p.id === productId);

    if (product) {
        const checkoutData = {
            id: product.id,
            name: product.name,
            size: product.size,
            price: product.price,
            img: product.img,
            quantity: quantity
        };

        let existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];
        existingCheckout.push(checkoutData);

        localStorage.setItem('checkout', JSON.stringify(existingCheckout));

        updateCartBadge();

        window.location.href = '../beauty/checkout.html';

    } else {
        console.error('Product not found.');
    }
}

function beli_langung(productId, quantity) {
    const product = products.find(p => p.id === productId);

    if (product) {
        const checkoutData = {
            id: product.id,
            name: product.name,
            size: product.size,
            price: product.price,
            img: product.img,
            quantity: quantity
        };

        let existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];
        let itemExists = false;

        existingCheckout = existingCheckout.map(item => {
            if (item.id === productId) {
                item.quantity += quantity;
                itemExists = true;
            }
            return item;
        });

        if (!itemExists) {
            existingCheckout.push(checkoutData);
        }

        localStorage.setItem('checkout', JSON.stringify(existingCheckout));
        updateCartBadge();
        window.location.href = '../beauty/checkout.html';
    } else {
        console.error('Product not found.');
    }
}

function updateCartModal() {
    const existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];

    const $cartItemsContainer = $('#cart-items-container');
    const $cartItemsCount = $('#cart-items-count');
    const $checkoutButton = $('#checkout-button');

    $cartItemsContainer.empty();

    if (existingCheckout.length > 0) {
        $checkoutButton.removeC
        let totalAmount = 0;
        existingCheckout.forEach(item => {
            const itemElement = $(`
                <div class="cart-item" data-price="${item.price}">
                    <img src="${item.img}" alt="Product" style="width: 60px; height: 60px;">
                    <div class="item-info ">
                        <p class="text-grey text-demibold mb-1">${item.name}</p>
                        <h6 class="text-grey text-regular">Size: ${item.size}</h6>
                        
                    </div>
                     <div class="item-price">
                        <p class="text-brown text-demibold">Rp ${item.price.toLocaleString()}
                        </p>
                        
                    </div>
                   
                </div>
                <div class="d-flex flex-row align-items-center justify-content-between" style="margin-left:70px">
                   <div class="input-group " style="width: 100px;">
                            <div class="input-group input-group-capsule mb-3">
                                <button class="btn btn-capsule" type="button" onclick="checkout(1,-1)">-</button>
                                <input type="text" class="form-control input-capsule" value="${item.quantity}">
                                <button class="btn btn-capsule" type="button" style="padding: 4px;" onclick="checkout(1,1)">+</button>
                            </div>
                        </div>
                        
                         <button class="btn btn-link text-brown remove-btn text-regular" data-product-id="${item.id}" onclick="removeFromCart(${item.id})">HAPUS</button>
                </div>
              
                <hr>
            `);

            $cartItemsContainer.append(itemElement);
            totalAmount += item.price * item.quantity;
        });

        $cartItemsCount.text(`(${existingCheckout.length} items)`);

        $checkoutButton.text(`CHECKOUT - Rp ${totalAmount.toLocaleString()}`);
        $checkoutButton.show();
    } else {
        checkoutButton = 0;
        $cartItemsCount.text('(0 items)');
        $cartItemsContainer.html(`
            <p class="text-center text-regular" style="margin-top: 20px;">Keranjang Anda Kosong</p>
            <a href="./beauty.html" type="button" class="custom-button-brown text-center text-regular w-100" style="margin-top: 20px;">BELANJA SEKARANG</a>
        `);
        $checkoutButton.hide();
    }
}

function removeFromCart(productId) {
    let existingCheckout = JSON.parse(localStorage.getItem('checkout')) || [];
    existingCheckout = existingCheckout.filter(item => item.id !== productId);
    localStorage.setItem('checkout', JSON.stringify(existingCheckout));
    updateCartModal();
    updateCartBadge();
}

function btnQty(e) {
    var $input = $(e).closest('.input-group-capsule').find('.input-capsule');
    var currentValue = parseInt($input.val());

    var $cartItem = $(e).closest('.d-flex').prev('.cart-item');
    var price = parseInt($cartItem.data('price'));

    var $checkoutButton = $('#checkout-button');

    var checkoutText = $checkoutButton.text().replace('CHECKOUT - Rp ', '').replace(/\./g, '').replace(/,/g, '');
    var currentTotal = parseInt(checkoutText);

    if (isNaN(currentTotal)) {
        currentTotal = price * currentValue;
    }

    if ($(e).text() === '+') {
        $input.val(currentValue + 1);
        currentTotal += price;
    } else if ($(e).text() === '-') {
        if (currentValue > 1) {
            $input.val(currentValue - 1);
            currentTotal -= price;
        }
    }

    $checkoutButton.text('CHECKOUT - Rp ' + currentTotal.toLocaleString('id-ID'));
}


function paymentDone() {
    localStorage.removeItem('checkout');
}


document.getElementById('searchInput').addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter)
    );

    if (filteredProducts.length > 0) {
        let html = filteredProducts.map(product => `
            <section class="product-section py-3" style="margin-top: 12rem;">
                <div class="container text-center">
                <p class="text-demibold text-brown fs-5">Hasil pencarian tentang “${filter}”</p>
                    <div class="product row align-items-center mb-5">
                        <div class="col-md-6 image-bouncing">
                            <img src="${product.img}" class="img-fluid" width="500" alt="${product.name}">
                        </div>
                        <div class="col-md-6 text-md-start text-center" data-title="${product.name}">
                            <h6>KAPAS PEMBERSIH</h6>
                            <h3 class="pink text-demibold mb-2">${product.name}</h3>
                            <h6 class="text-regular mb-4">${product.desc}</h6>
                            <h6 class="text-brown">${product.priceShow}</h6>
                            <div class="d-flex justify-content-start mt-5">
                                <div class="d-flex justify-content-start">
                                    <div class="me-2">
                                        <button type="button" class="custom-button-brown" onclick="beli_langung(${product.id},1)">
                                            <i class="fas fa-shopping-bag me-1"></i> BELI LANGSUNG
                                        </button>
                                    </div>
                                    <div>
                                        <a type="button" href="./product-detail.html" class="custom-button-brown-outline">LEBIH DETAIL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `).join('');

        $('#search-result').html(html);
        $('#main-section').css('display', 'none');
    } else {

        let html = `
            <section class="product-section py-3" style="margin-top: 12rem;">
                <div class="container text-center">
                <p class="text-demibold text-brown fs-5">Hasil pencarian tentang “${filter}”</p>
                   
                <p class="text-demibold text-brown fs-6 mt-5">Tidak ada hasil</p>
                </div>
            </section>
        `;

        $('#search-result').html(html);
    }
});
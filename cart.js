document.addEventListener("DOMContentLoaded", function () {
    const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
    const container = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        cart.forEach((productId) => {
            fetch(`${apiURL}/${productId}`)
                .then((res) => res.json())
                .then((product) => {
                    renderProductInCartPage(container, product);
                })
                .catch((error) => console.error("Error fetching data:", error));
        });
    } else {
        container.innerHTML = `<p>Savatcha bo‘sh!</p>`;
    }

    function renderProductInCartPage(container, product) {
        container.innerHTML += `
            <div class="product" data-id="${product.id}">
                <img src="${product.image_url}" alt="">
                <div class="product-details">
                    <h2>${product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
                <button class="remove-btn">Remove</button>
            </div>
        `;
    }

    container.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('remove-btn')) {
            const productElement = e.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const updatedCart = cart.filter(id => id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            productElement.remove();
            console.log(`Mahsulot (ID: ${productId}) savatchadan o‘chirildi.`);
        }
    });
});

// index.js

document.addEventListener("DOMContentLoaded", function () {
    const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
    const container = document.getElementById("product-container");
  
    // Mahsulotlarni API dan olish va ko'rsatish
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          renderProductInIndexPage(container, product);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    // Mahsulotni index sahifasida ko'rsatish
    function renderProductInIndexPage(container, product) {
      container.innerHTML += `
        <div class="product">
        <a href="./product.html">
          <img src="${product.image_url}" alt="">
        </a>
          <div class="like" id="default_like_div">
            <img id="default_like" class="flex" src="./product/like/like.svg" alt="">
            <img id="red_like" class="hidden" src="./product/like/red_like.svg" alt="">
          </div>
          <div class="flex flex-col items-center justify-center gap-[20px]">
            <div class="flex flex-col items-start justify-center gap-[10px]">
              <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
              <h2 class="text-[15px] font-[500]">${product.title}</h2>
              <div class="product_rate flex items-center justify-between w-[100px]">
                <div class="product_rate_img">
                  <img class="border-[0px]" src="./product/rate/rate.svg" alt="">
                </div>
                <p>(${product.rating})</p>
              </div>
              <p class="text-[#F53E32] text-[14px] font-[400]"><span class="text-[#B6B6B6]">By</span> ${product.brand}</p>
            </div>
            <div class="flex items-center justify-between w-[100%]">
              <div class="product2_price flex items-center justify-center gap-[10px]">
                <p class="font-[700]">${product.price}</p>
                <span class="font-[600]">${product.old_price}</span>
              </div>
              <button class="add_button">
                <div class="w-[14px]">
                  <img src="./product/cart/Vector.svg" alt="">
                </div>
                <p class="text-white text-[14px] font-[700]">Add</p>
              </button>
            </div>
                <button class="delete-btn">Delete</button>
          </div>
        </div>
    `;
    }
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const deleteBtns = document.querySelectorAll('.delete-btn');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const productElement = e.target.closest('.product'); // O‘chiriladigan mahsulotni topish
            const productId = productElement.dataset.id; // Mahsulotning ID sini olish

            // Mahsulotni o‘chirish
            deleteProduct(productId); // O‘chirish funksiyasini chaqirish

            // DOMdan o‘chirish
            productElement.remove();
        });
    });
});

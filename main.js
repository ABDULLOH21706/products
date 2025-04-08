let showcase_marks = document.querySelectorAll(".showcase_mark");
showcase_marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    let showcase_element = mark.closest("div");
    showcase_element.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
  const container1 = document.getElementById("product-container");
  const container2 = document.getElementById("product-container-2");

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const firstTenProducts = data.slice(0, 10);
      const lastFiveProducts = data.slice(10, 14);
      firstTenProducts.forEach((product) => {
        container1.innerHTML += `
        <a href="./product.html">
<div class="product">
    <img src="${product.image_url}" alt="">
    <div class="like" id="default_like_div">
      <img id="default_like" class="flex" src="./product/like/like.svg" alt="">
      <img id="red_like" class="hidden" src="./product/like/red_like.svg" alt="">
    </div>
    <div class="flex flex-col items-center justify-center gap-[20px]">
        <div class="flex flex-col items-start justify-center gap-[10px]">
            <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
            <h2 class="text-[15px] font-[500]">${product.title}</h2>
            <div class="product_rate flex items-center justify-between w-[100px]">
                <div class="product_rate_img ">
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
    </div>
</div>
</a>
`;
      });

      lastFiveProducts.forEach((product, index) => {
        const soldPercentage = calculateSoldPercentage(
          product.sold,
          product.from
        );
        const productId = `product-${index}`;
        container2.innerHTML += `
          <div class="product2 flex flex-col gap-[20px]" id="${productId}">
            <div class="w-[100%]">
              <img src="${product.image_url}">
            </div>
            <div class="flex flex-col items-center justify-center" style="gap: 22px;">
              <div class="flex flex-col items-start justify-center gap-[10px]">
                <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
                <h2 class="text-[16px] font-[700]">${product.title}</h2>
                <div class="w-[60px]">
                  <img src="./product/rate/rate.svg" alt="" draggable="false">
                </div>
              </div>
              <div class="flex flex-col items-start justify-center gap-[17px] w-[100%]">
                <div class="product2_price">
                  <p class="font-[700]">${product.price}</p>
                  <span class="font-[600]">${product.old_price}</span>
                </div>
                <div class="flex flex-col items-center justify-center gap-[9px] w-[100%]">
                  <div class="foiz_div">
                    <div class="foiz" style="width: ${soldPercentage}%"></div>
                  </div>
                  <div class="flex items-center justify-start w-[100%]">
                    <p class="text-[13px] font-[400] sold-text">sold: ${product.sold}/${product.from}</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center w-[100%]">
                <button 
                  class="add-to-cart-btn text-white text-[14px] font-[700] bg-[#F53E32] rounded-[4px]" 
                  style="width: 100%; height: 47px;">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        `;
        setTimeout(() => {
          const button = document.querySelector(
            `#${productId} .add-to-cart-btn`
          );
          button.addEventListener("click", () => {
            if (product.sold < product.from) {
              const updatedSold = product.sold + 1;

              fetch(
                `https://67e66e836530dbd3110ff49a.mockapi.io/todo/products/${product.id}`,
                {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ sold: updatedSold }),
                }
              )
                .then((res) => res.json())
                .then((updatedProduct) => {
                  product.sold = updatedProduct.sold;

                  const newPercent = calculateSoldPercentage(
                    product.sold,
                    product.from
                  );
                  const card = document.getElementById(productId);
                  const foizBar = card.querySelector(".foiz");
                  const soldText = card.querySelector(".sold-text");

                  foizBar.style.width = `${newPercent}%`;
                  soldText.textContent = `sold: ${product.sold}/${product.from}`;
                })
                .catch((err) => console.error("PATCH error:", err));
            }
          });
        }, 0);
      });
      function calculateSoldPercentage(sold, from) {
        if (from === 0) return 0;
        return ((sold / from) * 100).toFixed(2);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

const cartItems = document.getElementById("cart-items");
function addToCart(product) {
  const productItem = document.createElement("div");
  productItem.classList.add("cart-item");
  productItem.innerHTML = `
    <div class="cart-item-info">
      <img src="${product.image_url}" alt="Product Image" style="width: 50px;">
      <p class="product-title">${product.title}</p>
      <p class="product-price">${product.price}</p>
    </div>
  `;
  cartItems.appendChild(productItem);
}

document.getElementById("addBtn").addEventListener("click", async () => {
  const product = {
    img: document.getElementById("img").value,
    rating: document.getElementById("rating").value,
    brand: document.getElementById("brand").value,
    price: document.getElementById("price").value,
    oldPrice: document.getElementById("oldPrice").value,
    category: document.getElementById("category").value,
    text: document.getElementById("text").value,
  };
  try {
    const res = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    console.log("Yangi product qo‘shildi:", data);
    renderProduct(data);
  } catch (err) {
    console.error("Xatolik yuz berdi:", err);
  }
});
function renderProduct(product) {
  const container = document.getElementById("product-list");
  if (!container) return; // DOMda yo‘q bo‘lsa chiqib ket

  const card = document.createElement("div");
  card.className = "rounded-xl border shadow p-4";
  card.innerHTML = `
    <img src="${product.img}" class="w-full h-[200px] object-cover mb-3" />
    <h2>${product.brand}</h2>
    <p>${product.category}</p>
    <p>${product.price} <span>${product.oldPrice}</span></p>
    <p>${product.text}</p>
    <p>⭐ ${product.rating}</p>
  `;
  container.prepend(card);
}

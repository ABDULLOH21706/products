const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";

// DOM kontenti yuklanganda ishga tushadigan funksiyani yaratish
document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector(".addBtn"); // 'addBtn' class orqali elementni topish

  // Agar 'addBtn' tugmasi mavjud bo'lsa, unga event listener qo'shish
  if (addBtn) {
    addBtn.addEventListener("click", async function () {
      // Formdan olingan ma'lumotlar
      const product = {
        image_url: document.getElementById("img").value,
        title: document.getElementById("title").value,
        rating: document.getElementById("rating").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        old_price: document.getElementById("oldPrice").value,
        category: document.getElementById("category").value,
        text: document.getElementById("text").value,
        sold: parseInt(document.getElementById("sold").value) || 0,
        from: parseInt(document.getElementById("from").value) || 0,
      };

      // Mahsulotni API'ga yuborish
      try {
        const res = await fetch(apiURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        const data = await res.json();
        console.log("✅ Yangi product qo‘shildi:", data);

        // Yangi mahsulotni index sahifasida ko'rsatish
        renderProductInIndexPage(data);

        // Alert orqali foydalanuvchiga xabar berish
        alert("Product muvaffaqiyatli qo‘shildi!");
      } catch (err) {
        console.error("❌ Xatolik yuz berdi:", err);

        // Agar xatolik yuz bersa, alert orqali foydalanuvchiga xabar berish
        alert("Xatolik yuz berdi!");
      }
    });
  } else {
    console.log("addBtn element not found");
  }
});

// Mahsulotni index sahifasida ko‘rsatish funksiyasi
function renderProductInIndexPage(product) {
  const container = document.getElementById("product-container");

  // Mahsulotni DOM elementiga qo‘shish
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
          </div>
        </div>
    `;
}


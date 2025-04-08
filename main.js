let showcase_marks = document.querySelectorAll(".showcase_mark");
showcase_marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    let showcase_element = mark.closest("div");
    showcase_element.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";

  // Ikkita divga mahsulotlarni joylashtiradigan elementlarni olish
  const container1 = document.getElementById("product-container");
  const container2 = document.getElementById("product-container-2");

  // Fetch so'rovini yuborish
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      // Mahsulotlarni ikkita divga bo'lish
      const firstTenProducts = data.slice(0, 10); // 10 ta mahsulot
      const lastFiveProducts = data.slice(10, 14); // 5 ta mahsulot

      // Birinchi divga mahsulotlarni qo'shish
      firstTenProducts.forEach((product) => {
        container1.innerHTML += `
        <a href="./cart.html">
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
      // lastFiveProducts.forEach((product) => {
      //   const soldPercentage = calculateSoldPercentage(product.sold, product.from);
      //   container2.innerHTML += `
      //     <div class="product2 flex">
      //       <div class="w-[100%]">
      //         <img src="${product.image_url}">
      //       </div>
      //       <div class="flex flex-col items-center justify-center" style="gap: 22px;">
      //         <div class="flex flex-col items-start justify-center gap-[10px]">
      //           <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
      //           <h2 class="text-[16px] font-[700]">${product.title}</h2>
      //           <div class="w-[60px]">
      //             <img src="./product/rate/rate.svg" alt="" draggable="false">
      //           </div>
      //         </div>
      //         <div class="flex flex-col items-start justify-center gap-[17px] w-[100%]">
      //           <div class="product2_price">
      //             <p class="font-[700]">${product.price}</p>
      //             <span class="font-[600]">${product.old_price}</span>
      //           </div>
      //           <div class="flex flex-col items-center justify-center gap-[9px] w-[100%]">
      //             <div class="foiz_div">
      //               <div class="foiz" style="width: ${soldPercentage}%"></div>
      //             </div>
      //             <div class="flex items-center justify-start w-[100%]">
      //               <p class="text-[13px] font-[400]">sold: ${product.sold}/${product.from}</p>
      //             </div>
      //           </div>
      //         </div>
      //         <div class="flex items-center justify-center w-[100%]">
      //           <button class="text-white text-[14px] font-[700] bg-[#F53E32] rounded-[4px]" style="width: 100%; height: 47px;">
      //             Add To Cart
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   `;
      // });
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

        // 🚀 Add to cart listener bu yerning ichida bo'lishi kerak
        setTimeout(() => {
          const button = document.querySelector(
            `#${productId} .add-to-cart-btn`
          );
          button.addEventListener("click", () => {
            if (product.sold < product.from) {
              const updatedSold = product.sold + 1;

              // 🔁 PATCH so'rov jo‘natamiz
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

// Get references to the cart and like buttons
const cartItems = document.getElementById("cart-items");

// Function to add a product to the cart
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

  // Append to cart container
  cartItems.appendChild(productItem);
}

const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products"; 


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

    // API ga POST request
    try {
        const res = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await res.json();
        console.log("Yangi product qo‘shildi:", data);

        // Brauzerga chiqaramiz
        renderProduct(data);
    } catch (err) {
        console.error("Xatolik yuz berdi:", err);
    }
});

function renderProduct(product) {
    const container = document.getElementById("product-list");

    const card = document.createElement("div");
    card.className = "rounded-xl border shadow p-4";

    card.innerHTML = `
        <img src="${product.img}" alt="product" class="w-full h-[200px] object-cover rounded-md mb-3" />
        <h2 class="text-lg font-semibold">${product.brand}</h2>
        <p class="text-sm text-gray-500">${product.category}</p>
        <p class="text-red-500 text-xl font-bold">$${product.price} <span class="line-through text-gray-400 text-sm">$${product.oldPrice}</span></p>
        <p class="text-sm mt-2">${product.text}</p>
        <p class="text-yellow-500 mt-1">⭐ ${product.rating}</p>
    `;

    container.prepend(card); // yangi productni eng yuqoriga qo‘yish
}



// Fetch products and display them
// document.addEventListener("DOMContentLoaded", function () {
//   const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";

//   fetch(apiURL)
//     .then((res) => res.json())
//     .then((data) => {
//       const container1 = document.getElementById("product-container");

//       data.forEach((product) => {
//         // Add product to the page
//         container1.innerHTML += `
//           <div class="product">
//             <img src="${product.image_url}" alt="${product.title}">
//             <div class="like" data-product-id="${product.id}">
//               <img src="./product/like/like.svg" class="like-icon" alt="Like">
//               <img src="./product/like/red_like.svg" class="like-icon hidden" alt="Liked">
//             </div>
//             <div class="product-info">
//               <h2>${product.title}</h2>
//               <p>${product.price}</p>
//             </div>
//             <button class="add-to-cart-btn">Add to Cart</button>
//           </div>
//         `;

//         // Add event listener to the "like" button
//         const likeButton = document.querySelector(
//           `[data-product-id="${product.id}"]`
//         );
//         const defaultLike = likeButton.querySelector(".like-icon:first-child");
//         const redLike = likeButton.querySelector(".like-icon:last-child");

//         likeButton.addEventListener("click", () => {
//           defaultLike.classList.toggle("hidden");
//           redLike.classList.toggle("hidden");

//           // Add product to cart when liked
//           addToCart(product);
//         });
//       });
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// let product = JSON.parse(localStorage.getItem("product")) || [];
// let products = document.querySelector(".products");

// export function getToCardData(data) {
//   let data2 = [...product, data];
//   console.log(product);
//   localStorage.setItem("products", JSON.stringify(data2));
// }

// function renderUi() {
//   products.innerHTML = "";
//   product.forEach((value) => {
//     container2.innerHTML += `
//           <div class="product2 flex flex-col gap-[20px]" id="${productId}">
//             <div class="w-[100%]">
//               <img src="${product.image_url}">
//             </div>
//             <div class="flex flex-col items-center justify-center" style="gap: 22px;">
//               <div class="flex flex-col items-start justify-center gap-[10px]">
//                 <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
//                 <h2 class="text-[16px] font-[700]">${product.title}</h2>
//                 <div class="w-[60px]">
//                   <img src="./product/rate/rate.svg" alt="" draggable="false">
//                 </div>
//               </div>
//               <div class="flex flex-col items-start justify-center gap-[17px] w-[100%]">
//                 <div class="product2_price">
//                   <p class="font-[700]">${product.price}</p>
//                   <span class="font-[600]">${product.old_price}</span>
//                 </div>
//                 <div class="flex flex-col items-center justify-center gap-[9px] w-[100%]">
//                   <div class="foiz_div">
//                     <div class="foiz" style="width: ${soldPercentage}%"></div>
//                   </div>
//                   <div class="flex items-center justify-start w-[100%]">
//                     <p class="text-[13px] font-[400] sold-text">sold: ${product.sold}/${product.from}</p>
//                   </div>
//                 </div>
//               </div>
//               <div class="flex items-center justify-center w-[100%]">
//                 <button 
//                   class="add-to-cart-btn text-white text-[14px] font-[700] bg-[#F53E32] rounded-[4px]" 
//                   style="width: 100%; height: 47px;">
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         `;
//   });
// }
// renderUi()


// const cors = require("cors");
// const app = express();
// app.use(cors());
// document.addEventListener("DOMContentLoaded", function () {
//   const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";

//   // Ikkita divga mahsulotlarni joylashtiradigan elementlarni olish
//   const container1 = document.getElementById("product-container");
//   const container2 = document.getElementById("product-container-2");

//   // Fetch so'rovini yuborish
//   fetch(apiURL)
//     .then((res) => res.json())
//     .then((data) => {
//       // Mahsulotlarni ikkita divga bo'lish
//       const firstTenProducts = data.slice(0, 10); // 10 ta mahsulot
//       const lastFiveProducts = data.slice(10, 18); // 5 ta mahsulot

//       // Birinchi divga mahsulotlarni qo'shish
//       firstTenProducts.forEach((product) => {
//         container1.innerHTML += `
//           <div class="product">
//             <img src="${product.image_url}" alt="">
//             <div class="like">
//               <img id="default_like" class="flex" src="./product/like/like.svg" alt="">
//               <img id="red_like" class="hidden" src="./product/like/red_like.svg" alt="">
//             </div>
//             <div class="flex flex-col items-center justify-center gap-[20px]">
//                 <div class="flex flex-col items-start justify-center gap-[10px]">
//                     <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
//                     <h2 class="text-[15px] font-[500]">${product.title}</h2>
//                     <div class="product_rate flex items-center justify-between w-[100px]">
//                         <div class="product_rate_img ">
//                             <img class="border-[0px]" src="./product/rate/rate.svg" alt="">
//                         </div>
//                         <p>(${product.rating})</p>
//                     </div>
//                     <p class="text-[#F53E32] text-[14px] font-[400]"><span class="text-[#B6B6B6]">By</span> ${product.brand}</p>
//                 </div>
//                 <div class="flex items-center justify-between w-[100%]">
//                     <div class="product2_price flex items-center justify-center gap-[10px]">
//                         <p class="font-[700]">${product.price}</p>
//                         <span class="font-[600]">${product.old_price}</span>
//                     </div>
//                     <button class="add_button">
//                         <div class="w-[14px]">
//                           <img src="./product/cart/Vector.svg" alt="">
//                         </div>
//                         <p class="text-white text-[14px] font-[700]">Add</p>
//                     </button>
//                 </div>
//             </div>
//           </div>
//         `;
//       });

//       // lastFiveProducts
//       lastFiveProducts.forEach((product, index) => {
//         const soldPercentage = calculateSoldPercentage(product.sold, product.from);
//         const productId = `product-${index}`;
//         container2.innerHTML += `
//           <div class="product2 flex flex-col gap-[20px]" id="${productId}">
//             <div class="w-[100%]">
//               <img src="${product.image_url}">
//             </div>
//             <div class="flex flex-col items-center justify-center" style="gap: 22px;">
//               <div class="flex flex-col items-start justify-center gap-[10px]">
//                 <p class="text-[#ADADAD] text-[12px] font-[400]">${product.category}</p>
//                 <h2 class="text-[16px] font-[700]">${product.title}</h2>
//                 <div class="w-[60px]">
//                   <img src="./product/rate/rate.svg" alt="" draggable="false">
//                 </div>
//               </div>
//               <div class="flex flex-col items-start justify-center gap-[17px] w-[100%]">
//                 <div class="product2_price">
//                   <p class="font-[700]">${product.price}</p>
//                   <span class="font-[600]">${product.old_price}</span>
//                 </div>
//                 <div class="flex flex-col items-center justify-center gap-[9px] w-[100%]">
//                   <div class="foiz_div">
//                     <div class="foiz" style="width: ${soldPercentage}%"></div>
//                   </div>
//                   <div class="flex items-center justify-start w-[100%]">
//                     <p class="text-[13px] font-[400] sold-text">sold: ${product.sold}/${product.from}</p>
//                   </div>
//                 </div>
//               </div>
//               <div class="flex items-center justify-center w-[100%]">
//                 <button
//                   class="add-to-cart-btn text-white text-[14px] font-[700] bg-[#F53E32] rounded-[4px]"
//                   style="width: 100%; height: 47px;">
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         `;

//         // Add to cart listener
//         const button = document.querySelector(`#${productId} .add-to-cart-btn`);
//         button.addEventListener("click", () => {
//           if (product.sold < product.from) {
//             const updatedSold = product.sold + 1;
//             // PATCH so'rov
//             fetch(
//               `https://67e66e836530dbd3110ff49a.mockapi.io/todo/products/${product.id}`,
//               {
//                 method: "PATCH",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ sold: updatedSold }),
//               }
//             )
//               .then((res) => res.json())
//               .then((updatedProduct) => {
//                 // Mahsulot sold qiymatini yangilash
//                 product.sold = updatedProduct.sold;
//                 const newPercent = calculateSoldPercentage(product.sold, product.from);
//                 const card = document.getElementById(productId);
//                 const foizBar = card.querySelector(".foiz");
//                 const soldText = card.querySelector(".sold-text");

//                 // DOM yangilanishi
//                 foizBar.style.width = `${newPercent}%`;
//                 soldText.textContent = `sold: ${product.sold}/${product.from}`;
//               })
//               .catch((err) => console.error("PATCH error:", err));
//           }
//         });
//       });

//       function calculateSoldPercentage(sold, from) {
//         if (from === 0) return 0;
//         return ((sold / from) * 100).toFixed(2);
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });



document.addEventListener("DOMContentLoaded", function () {
    const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
    const container = document.getElementById("product-container");
  
    if (!container) {
      console.error('product-container elementi topilmadi!');
      return;
    }
  
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          renderProductInIndexPage(container, product);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    function renderProductInIndexPage(container, product) {
      container.innerHTML += `
        <div class="product" data-id="${product.id}">
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
                <p class="text-white text-[14px] font-[700]" data-id="${product.id}">Add</p>
              </button>
            </div>
            <button class="delete-btn w-[100%] h-[45px] rounded-[4px] text-white bg-[#F53E32]">Delete</button>
          </div>
        </div>
      `;
    }
  });  




  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  window.addEventListener('DOMContentLoaded', () => {
    const productId = getUrlParameter('id');
    if (productId) {
      const product = {
        1: { title: 'Mahsulot 1', description: 'birinchi mahsulot.', image_url: './product/product-1.svg' },
        2: { title: 'Mahsulot 2', description: 'ikkinchi mahsulot.', image_url: './product/product-2.svg' },
      }[productId];
      if (product) {
        const detailsContainer = document.getElementById('product-details');
        detailsContainer.innerHTML = `
          <h1>${product.title}</h1>
          <img src="${product.image_url}" alt="${product.title}">
          <p>${product.description}</p>
        `;
      } else {
        document.getElementById('product-details').innerHTML = '<p>Mahsulot topilmadi.</p>';
      }
    } else {
      document.getElementById('product-details').innerHTML = '<p>Mahsulot ID si berilmagan.</p>';
    }
  });
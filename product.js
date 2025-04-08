document.addEventListener("DOMContentLoaded", function () {
  // URL parametridan mahsulot ID ni olish
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Mahsulot ma'lumotlarini olish
  const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
  const container = document.getElementById("product-container");

  // Mahsulotni API dan olish
  fetch(`${apiURL}/${productId}`)
    .then((res) => res.json())
    .then((product) => {
      renderProductInCartPage(container, product);
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });

  function renderProductInCartPage(container, product) {
    container.innerHTML = `
        <div class="w-[470px] flex flex-col items-center justify-center gap-[15px]">
          <div class="w-[100%]">
              <img src="${product.image_url}" alt="" draggable="false">
          </div>
          <div class="w-[100%] flex items-center justify-center gap-[12px]">
              <div class="w-[85px]">
                  <img src="${product.image_url}" alt="" draggable="false">
              </div>
              <div class="w-[85px]">
                  <img src="${product.image_url}" alt="" draggable="false">
              </div>
              <div class="w-[85px]">
                  <img src="${product.image_url}" alt="" draggable="false">
              </div>
              <div class="w-[85px]">
                  <img src="${product.image_url}" alt="" draggable="false">
              </div>
              <div class="w-[85px]">
                  <img src="${product.image_url}" alt="" draggable="false">
              </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-[47px] w-[450px]">
          <div class="flex flex-col items-center justify-center gap-[17px] w-[100%]">
            <p class="text-[22px] font-[400] w-[100%]">${product.title}</p>
            <p class="text-[#7A7A7A] text-[14px] font-[400] w-[100%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
                minus error doloribus saepe natus?
            </p>
          </div>
          <div class="flex flex-col items-center justify-center gap-[24px] w-[100%]">
            <div class="flex items-center justify-start w-[100%] gap-[10px]">
              <div class="w-[80px]">
                  <img src="./product/rate/rate.svg" alt="" draggable="false">
              </div>
              <p class="text-[#7A7A7A] text-[15px] font-[400]">( ${product.rating} review )</p>
            </div>
            <div class="flex flex-col items-start justify-center w-[100%] gap-[18px]">
              <p class="text-[16px] font-[600]">Brand : <span class="text-[#777777] font-[400]">${product.brand}</span></p>
              <p class="text-[16px] font-[600]">Flavour : <span class="text-[#777777] font-[400]">${product.category}</span></p>
              <p class="text-[16px] font-[600]">Diet Type : <span
                      class="text-[#777777] font-[400]">Vegetarian</span></p>
              <p class="text-[16px] font-[600]">Weight : <span class="text-[#777777] font-[400]">200 Grams</span></p>
              <p class="text-[16px] font-[600]">Speciality : <span
                      class="text-[#777777] font-[400]">Gluten Free</span></p>
              <p class="text-[16px] font-[600]">sold : <span class="text-[#777777] font-[400]">${product.sold}</span></p>
              <p class="text-[16px] font-[600]">from : <span class="text-[#777777] font-[400]">${product.from}</span></p>
            </div>
          </div>
          <div class="flex flex-col items-start justify-center w-[100%] gap-[22px]">
            <div class="flex items-center justify-center gap-[5px]">
              <p class="text-[#F53E32] text-[24px] font-[600]">${product.price}
                  <span class="text-[#7A7A7A] text-[16px] font-[400]">${product.old_price}</span>
              </p>
            </div>
            <div class="flex items-center justify-center gap-[4px]">
              <p class="text-[16px] font-[500]">
                  Size/Weight :
              </p>
              <button
                  class="p-[3px] pr-[11px] pl-[11px] border-[1px] border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] hover:bg-[#F53E32] hover:text-white rounded-[5px]">50kg</button>
              <button
                  class="p-[3px] pr-[11px] pl-[11px] border-[1px] border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] hover:bg-[#F53E32] hover:text-white rounded-[5px]">80kg</button>
              <button
                  class="p-[3px] pr-[11px] pl-[11px] border-[1px] border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] hover:bg-[#F53E32] hover:text-white rounded-[5px]">120kg</button>
              <button
                  class="p-[3px] pr-[11px] pl-[11px] border-[1px] border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] hover:bg-[#F53E32] hover:text-white rounded-[5px]">200kg</button>
            </div>
          </div>
        </div>
      `;
  }
});

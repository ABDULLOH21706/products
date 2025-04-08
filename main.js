let showcase_marks = document.querySelectorAll(".showcase_mark");
showcase_marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    let showcase_element = mark.closest("div");
    showcase_element.classList.add("hidden");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
  const container = document.getElementById("product-container");

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((product) => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image_url}" alt="">
                <div class="product_info">
                    <p>${product.category}</p>
                    <h2>${product.title}</h2>
                    <div class="product_rate">
                        <img src="${}" alt="">
                    </div>
                </div>
            </div>
          `;
      });
    });
});
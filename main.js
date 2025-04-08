let showcase_marks = document.querySelectorAll(".showcase_mark");
showcase_marks.forEach((mark) => {
    mark.addEventListener("click", () => {
        let showcase_element = mark.closest('div');
        showcase_element.classList.add("hidden");
    });
});


// main.js
const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";
const container = document.getElementById("product-container");

fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      container.innerHTML += `
        <div class="product">
          <img src="${product.image_url}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>Price: $${product.price}</p>
        </div>
      `;
    });
  });

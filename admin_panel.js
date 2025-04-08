const apiURL = "https://67e66e836530dbd3110ff49a.mockapi.io/todo/products";

document.getElementById("addBtn").addEventListener("click", async () => {
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
    alert("Product muvaffaqiyatli qo‘shildi!");
  } catch (err) {
    console.error("❌ Xatolik yuz berdi:", err);
    alert("Xatolik yuz berdi!");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("productList");

  try {
    const products = await getProducts();

    if (products.length === 0) {
      container.innerHTML = "<p class='text-gray-600'>No products available.</p>";
      return;
    }

    products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow";

      card.innerHTML = `
        <h3 class="text-lg font-bold mb-1">${p.name}</h3>
        <p class="text-gray-700 mb-2">Price: $${p.price}</p>
        <button class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600" onclick='addToCart("${p._id}", "${p.name}", ${p.price})'>Add to Cart</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p class='text-red-600 text-center'>Failed to load products.</p>";
    console.error("Error loading products:", error);
  }
});

function addToCart(productId, name, price) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ productId, name, price, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart.`);
}

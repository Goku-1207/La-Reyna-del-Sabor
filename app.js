// ===== LA REYNA DEL SABOR - APP JS =====

let cart = [];
let customerName = "";
let currentModal = null;
let selectedVariant = "";

// ---- Navegación ----
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  el.classList.add("fade-in");
  setTimeout(() => el.classList.remove("fade-in"), 500);

  if (id === "screen-cart") renderCart();
  if (id === "screen-checkout") renderCheckout();
}

function startApp() {
  const input = document.getElementById("customer-name").value.trim();
  if (!input) {
    alert("¡Ingresa tu nombre para continuar! 😊");
    return;
  }
  customerName = input;
  document.getElementById("greeting-text").textContent = `Hola, ${customerName} 👑`;
  renderMenu(MENU);
  showScreen("screen-menu");
}

// ---- Menú ----
function renderMenu(items) {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.setAttribute("data-category", item.category);
    card.innerHTML = `
      <div class="card-img-wrap" onclick="openModal(${item.id})">
        <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='images/menu-bg.jpg'"/>
        <span class="card-badge">${item.badge}</span>
      </div>
      <div class="card-body">
        <h4>${item.name}</h4>
        <p>${item.desc.substring(0, 70)}...</p>
        <div class="card-footer">
          <span class="card-price">$${item.price}.00</span>
          <button class="add-btn" onclick="quickAdd(${item.id})">+ Agregar</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterMenu(cat, btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const filtered = cat === "all" ? MENU : MENU.filter(i => i.tag === cat);
  renderMenu(filtered);
}

// ---- Modal detalle ----
function openModal(id) {
  const item = MENU.find(i => i.id === id);
  currentModal = item;
  selectedVariant = item.variants.length > 0 ? item.variants[0] : "";

  document.getElementById("modal-img").src = item.img;
  document.getElementById("modal-name").textContent = item.name;
  document.getElementById("modal-desc").textContent = item.desc;
  document.getElementById("modal-price").textContent = `$${item.price}.00`;

  const varDiv = document.getElementById("modal-variants");
  if (item.variants.length > 0) {
    varDiv.innerHTML = `<p class="variants-label">Elige sabor:</p>` +
      item.variants.map(v => `
        <button class="variant-btn ${v === selectedVariant ? 'active' : ''}"
          onclick="selectVariant('${v}', this)">${v}</button>
      `).join("");
  } else {
    varDiv.innerHTML = "";
  }

  document.getElementById("product-modal").classList.add("open");
}

function selectVariant(v, btn) {
  selectedVariant = v;
  document.querySelectorAll(".variant-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function addFromModal() {
  if (currentModal) {
    addToCart(currentModal.id, selectedVariant);
    closeModalBtn();
    showToast(`¡${currentModal.name} agregado! 🎉`);
  }
}

function closeModal(e) {
  if (e.target.id === "product-modal") closeModalBtn();
}
function closeModalBtn() {
  document.getElementById("product-modal").classList.remove("open");
  currentModal = null;
}

// ---- Carrito ----
function quickAdd(id) {
  const item = MENU.find(i => i.id === id);
  if (item.variants.length > 0) {
    openModal(id);
  } else {
    addToCart(id, "");
    showToast(`¡${item.name} agregado! 🎉`);
  }
}

function addToCart(id, variant) {
  const item = MENU.find(i => i.id === id);
  const key = `${id}-${variant}`;
  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id, name: item.name, price: item.price, variant, qty: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cart-count").textContent = total;
}

function renderCart() {
  const body = document.getElementById("cart-body");
  const footer = document.getElementById("cart-footer");
  const empty = document.getElementById("empty-cart");

  if (cart.length === 0) {
    empty.style.display = "flex";
    footer.style.display = "none";
    body.innerHTML = "";
    body.appendChild(empty);
    return;
  }

  empty.style.display = "none";
  footer.style.display = "block";

  let html = "";
  cart.forEach((item, idx) => {
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          ${item.variant ? `<span class="item-variant">${item.variant}</span>` : ""}
        </div>
        <div class="cart-item-controls">
          <button onclick="changeQty(${idx}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${idx}, 1)">+</button>
          <span class="item-total">$${item.price * item.qty}</span>
          <button class="remove-btn" onclick="removeItem(${idx})">🗑</button>
        </div>
      </div>
    `;
  });

  body.innerHTML = html;

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("subtotal").textContent = `$${subtotal}.00`;
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartCount();
  renderCart();
}

function removeItem(idx) {
  cart.splice(idx, 1);
  updateCartCount();
  renderCart();
}

// ---- Checkout ----
function renderCheckout() {
  const summary = document.getElementById("order-summary");
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("total-final-amount").textContent = `$${total}.00`;

  let html = `<h3>Resumen</h3>`;
  cart.forEach(i => {
    html += `<div class="summary-row">
      <span>${i.name} ${i.variant ? `(${i.variant})` : ""} x${i.qty}</span>
      <span>$${i.price * i.qty}</span>
    </div>`;
  });
  summary.innerHTML = html;

  // Transfer info toggle
  document.querySelectorAll("input[name='payment']").forEach(radio => {
    radio.addEventListener("change", () => {
      document.getElementById("transfer-info").style.display =
        radio.value === "transferencia" && radio.checked ? "block" : "none";
    });
  });
}

function placeOrder() {
  const orderNum = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("confirm-name").textContent =
    `Gracias ${customerName}, tu pedido está en camino 🔥`;
  document.getElementById("order-number").textContent = orderNum;
  cart = [];
  updateCartCount();
  showScreen("screen-confirm");
}

function resetApp() {
  showScreen("screen-menu");
}

// ---- Toast ----
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ---- Init ----
window.addEventListener("load", () => {
  renderMenu(MENU);
});

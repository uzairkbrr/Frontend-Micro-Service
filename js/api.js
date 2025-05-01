const API_BASE = "http://localhost";

// Auth Service
async function loginUser(username, password) {
  const res = await fetch(`${API_BASE}:5001/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

async function registerUser(username, email, password) {
  const res = await fetch(`${API_BASE}:5001/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
}

// Product Service
async function getProducts() {
  const res = await fetch(`${API_BASE}:5002/products`);
  return res.json();
}

// Order Service
async function placeOrder(orderData, token) {
  const res = await fetch(`${API_BASE}:5003/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });
  return res.json();
}

async function getUserOrders(token) {
  const res = await fetch(`${API_BASE}:5003/orders/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

// Payment Service
async function makePayment(orderId, amount, token) {
  const res = await fetch(`${API_BASE}:5004/pay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ orderId, amount }),
  });
  return res.json();
}

// Notification Service
async function getUserNotifications(token) {
  const res = await fetch(`${API_BASE}:5006/notifications`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

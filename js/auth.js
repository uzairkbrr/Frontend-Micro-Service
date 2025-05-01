document.getElementById("loginForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = await loginUser(username, password);
  if (result.token) {
    localStorage.setItem("token", result.token);
    window.location.href = "home.html";
  } else {
    alert("Login failed");
  }
});

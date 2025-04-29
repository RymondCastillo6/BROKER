// Función de login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = localStorage.getItem(username);

  if (user) {
    const parsedUser = JSON.parse(user);
    if (parsedUser.password === password) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Contraseña incorrecta');
    }
  } else {
    alert('Usuario no encontrado');
  }
});

// Función de registro
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (localStorage.getItem(newUsername)) {
    alert('El usuario ya existe');
  } else {
    const newUser = { username: newUsername, password: newPassword };
    localStorage.setItem(newUsername, JSON.stringify(newUser));
    alert('Usuario registrado con éxito');
    window.location.href = 'login.html';
  }
});

// Función de cerrar sesión
function logout() {
  localStorage.clear();
  window.location.href = 'login.html';
}

// Modal Functions
function showRegulation() {
  document.getElementById('regulationModal').style.display = 'block';
}

function closeRegulation() {
  document.getElementById('regulationModal').style.display = 'none';
}

function deposit() {
  document.getElementById('depositModal').style.display = 'block';
}

function closeDeposit() {
  document.getElementById('depositModal').style.display = 'none';
}

function withdraw() {
  document.getElementById('withdrawModal').style.display = 'block';
}

function closeWithdraw() {
  document.getElementById('withdrawModal').style.display = 'none';
}

function submitDeposit() {
  const amount = document.getElementById('depositAmount').value;
  if (amount) {
    alert(`Depositado $${amount}`);
    closeDeposit();
  } else {
    alert('Por favor, ingresa una cantidad válida.');
  }
}

function submitWithdraw() {
  const amount = document.getElementById('withdrawAmount').value;
  if (amount) {
    alert(`Retirado $${amount}`);
    closeWithdraw();
  } else {
    alert('Por favor, ingresa una cantidad válida.');
  }
}

// Configuración del gráfico de TradingView
new TradingView.widget({
  "width": 980,
  "height": 610,
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "container_id": "tradingview-widget-container"
});

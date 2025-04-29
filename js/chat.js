// Función para abrir el chat
function openChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'block' : 'none';
  }
  
  // Función para enviar un mensaje en el chat
  function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
    const message = input.value;
    if (message) {
      const messageDiv = document.createElement('div');
      messageDiv.textContent = `Tú: ${message}`;
      chatWindow.appendChild(messageDiv);
      input.value = ''; // Limpiar el campo de entrada
      chatWindow.scrollTop = chatWindow.scrollHeight; // Desplazar al final
    }
  }
  
// /js/stripe.js

// Reemplaza con tu clave pública de Stripe
const stripe = Stripe('pk_test_TU_CLAVE_PUBLICA');

document.getElementById('checkout-button').addEventListener('click', () => {
  fetch('https://tu-servidor.com/crear-sesion', {
    method: 'POST',
  })
  .then(response => response.json())
  .then(session => {
    return stripe.redirectToCheckout({ sessionId: session.id });
  })
  .catch(error => console.error('Error:', error));
});

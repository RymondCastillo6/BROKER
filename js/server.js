// server.js
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_TU_CLAVE_SECRETA');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/crear-sesion', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Recarga de cuenta Pro Invester',
          },
          unit_amount: 1000, // 10 USD (en centavos)
        },
        quantity: 1,
      },
    ],
    success_url: 'https://tu-web.com/success.html',
    cancel_url: 'https://tu-web.com/cancel.html',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

// server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para crear la sesión de pago
app.post('/crear-sesion', async (req, res) => {
  try {
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
            unit_amount: 1000, // $10 USD (en centavos)
          },
          quantity: 1,
        },
      ],
      success_url: 'https://tuweb.com/success.html',
      cancel_url: 'https://tuweb.com/cancel.html',
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Error al crear la sesión:', err);
    res.status(500).json({ error: 'No se pudo crear la sesión de pago' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Stripe corriendo en http://localhost:${PORT}`);
});

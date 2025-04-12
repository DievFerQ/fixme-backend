// routes/webhooks.js
const express = require('express');
const router = express.Router();

router.post('/clerk', (req, res) => {
  console.log('📩 Webhook recibido de Clerk:', req.body);

  res.status(200).json({ message: '✅ Webhook recibido correctamente' });
});

module.exports = router;


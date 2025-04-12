const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.set('trust proxy', true); // ✅ Muy importante con ngrok

app.use(cors());
app.use(express.json());

// Ruta temporal para recibir el webhook
app.post('/webhooks/clerk', (req, res) => {
  console.log('📥 Webhook recibido:', req.body);
  res.status(200).send('✅ Webhook recibido');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error MongoDB:', err));

app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));



//================================================

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const userRoutes = require('./routes/users');
// const jobRoutes = require('./routes/jobRequests');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ Mongo error:', err));

// app.use('/api/users', userRoutes);
// app.use('/api/jobs', jobRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

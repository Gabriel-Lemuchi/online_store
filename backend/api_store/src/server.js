require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🔥 MongoDB conectado'))
  .catch(err => console.error(err));

app.listen(PORT, () => {
  console.log('🚀 Servidor rodando na porta ${PORT}');
});

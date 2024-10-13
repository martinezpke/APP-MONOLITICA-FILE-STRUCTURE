import app from '../app';
/* const connectDB = require('./config/db'); */
import { config } from 'dotenv';

config(); // Cargar variables de entorno

const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
/* connectDB(); */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

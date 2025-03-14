require('dotenv').config(); // Carregar variáveis de ambiente

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    sync: { force: true },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
     sync: { force: true },
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Para evitar logs poluindo os testes
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    sync: { force: false },
  },
};

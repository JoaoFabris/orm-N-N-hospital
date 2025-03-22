const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});

sequelize
  .sync({ force: true }) // Usa force: true para recriar as tabelas
  .then(() => {
    console.log('Tabelas criadas ou recriadas com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao criar as tabelas:', err);
  });

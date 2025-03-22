require('dotenv').config();
const db = require('../../src/models'); // Importe o objeto db completo
const { Plan, Patient } = db; // Extraia os modelos do db

describe('Plan Model', () => {
  beforeAll(async () => {
    if (process.env.NODE_ENV === 'test') {
      // Criar o banco de dados de teste apenas no ambiente de teste
      const database = process.env.DB_NAME || 'hospital_control_test';
      try {
        // Tente criar o banco de dados se ele não existir
        await db.sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
        await db.sequelize.sync({ force: true }); // Sincronize as tabelas do banco de teste
      } catch (error) {
        console.error('Erro ao configurar o banco de dados de teste:', error);
      }
    }
  });

  afterAll(async () => {
    await db.sequelize.close(); // Fecha a conexão com o banco após os testes
  });

  test('Deve criar um novo plano', async () => {
    const plan = await Plan.create({
      coverage: 'Total',
      price: 549.99,
    });

    expect(plan.price).toBe(549.99);
    expect(plan.coverage).toBe('Total');
  });
});

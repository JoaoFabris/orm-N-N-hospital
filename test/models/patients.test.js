require("dotenv").config();
const db = require("../../src/models"); // Importe o objeto db completo
const { Plan, Patient } = db; // Extraia os modelos do db


describe("Patients Model", () => {
  beforeAll(async () => {
    if (process.env.NODE_ENV === 'test') {
      // Criar o banco de dados de teste apenas no ambiente de teste
      const database = process.env.DB_NAME || 'hospital_control_test';
      try {
        // Tente criar o banco de dados se ele não existir
        await db.sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
        await db.sequelize.sync({ force: true }); // Sincronize as tabelas do banco de teste
      } catch (error) {
        console.error("Erro ao configurar o banco de dados de teste:", error);
      }
    }
  });

  afterAll(async () => {
    await db.sequelize.close(); // Fecha a conexão com o banco após os testes
  });

  test("Deve criar um novo paciente", async () => {
    const patient = await Patient.create({
      fullname: "João Fabris",
      plan_id: 1, // Assume que o Plan criado acima tem ID 1
    });

    expect(patient).toHaveProperty("patient_id");
    expect(patient.fullname).toBe("João Fabris");
  });

  test("Não deve permitir criar paciente sem um nome", async () => {
    await expect(Patient.create({ plan_id: 2 })).rejects.toThrow();
  });
});
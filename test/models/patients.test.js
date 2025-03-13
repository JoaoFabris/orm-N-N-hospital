const db = require("../../src/models"); // Importe o objeto db completo
const { Patient, Plan } = db; // Extraia os modelos do db

describe("Patients Model", () => {
  beforeAll(async () => {
    try {
      // Desativa as verificações de FK
      await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

      await db.sequelize.sync({ force: true });

      // Reativa as verificações
      await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

      await Plan.create({ coverage: "Basic", price: 100.0 });
    } catch (error) {
      console.error("Erro no beforeAll:", error);
    }
  });

  afterAll(async () => {
    await db.sequelize.close();
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

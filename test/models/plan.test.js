const db = require("../../src/models"); // Importe o objeto db completo
const { Plan } = db; // Extraia os modelos do db

describe("Plan Model", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  test("Deve criar um novo plano", async () => {
    const plan = await Plan.create({
      coverage: "Family",
      price: 950.0,
    });

    expect(plan.price).toBe(950.0);
    expect(plan.coverage).toBe("Family");
  });
});

const sinon = require('sinon');
const { sequelize } = require('../../src/models'); // Certifique-se de que o sequelize está importado corretamente
const patientService = require('../../src/service/patientService');
const { fakePatients } = require('../mocks/patientMock');

describe('Patient service test...', function () {
  beforeEach(async function () {
    sinon.restore();
    await sequelize.query('CREATE DATABASE IF NOT EXISTS hospital_control;');
    await sequelize.sync({ force: true });
  });

  it('should return a list of patients and plans', async function () {
    // Mock da função do service
    const findAllStub = sinon
      .stub(patientService, 'getAllPatientsPlans')
      .resolves(fakePatients);

    // Chama a função REAL do serviço (que usa o modelo mockado)
    const result = await patientService.getAllPatientsPlans();

    // Verifica o resultado
    expect(result).toEqual(fakePatients);
    sinon.assert.calledOnce(findAllStub);
  });
});

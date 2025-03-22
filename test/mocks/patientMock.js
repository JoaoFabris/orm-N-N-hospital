const fakePatients = [
  { id: 1, fullname: 'João Fabris', plan_id: 2 },
  { id: 2, fullname: 'Maria Silva', plan_id: 1 },
];

const patientMock = {
  findAll: jest.fn().mockResolvedValue(fakePatients), // Simula a busca de todos os pacientes
  findByPk: jest.fn(
    (id) => Promise.resolve(fakePatients.find((patient) => patient.id === id)) // Simula busca por ID
  ),
  create: jest.fn((data) => Promise.resolve({ id: 3, ...data })), // Simula a criação de um novo paciente
};

module.exports = { patientMock, fakePatients };

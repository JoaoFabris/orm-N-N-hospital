const { Patient, Plan } = require('../models');

const getAllPatientsPlans = async () => {
  try {
    const Patients = await Patient.findAll({
      include: { model: Plan, as: 'plan' },
    });

    if (!Patients.length) {
      return { message: 'No Patient found' };
    }

    return Patients;
  } catch (error) {
    console.error('Error in getAllPatientsPlans:', error); // Log do erro real
    throw error; // Propaga o erro para o controller
  }
};

module.exports = {
  getAllPatientsPlans,
};

const patientService = require('../service/patientService');

const getAllPatientsPlans = async (_req, res) => {
  try {
    const allPatientsPlans = await patientService.getAllPatientsPlans();

    if (allPatientsPlans.message) {
      return res.status(404).send(allPatientsPlans);
    }

    return res.status(200).json(allPatientsPlans);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = {
  getAllPatientsPlans,
};

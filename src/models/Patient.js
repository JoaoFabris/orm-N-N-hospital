"use strict";

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    "Patient",
    {
      patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plan_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "Patients", // Nome da tabela no banco de dados
      timestamps: false,
      underscored: true, // snake_case
    }
  );

  // Definição de associações
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: "plan_id", // Associando a coluna 'plan_id'
      as: "plan", // Alias para a associação
    });
  };

  return Patient; // Retornando o modelo
};

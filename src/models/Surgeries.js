"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    "Surgery",
    {
      surgery_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      specialty: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      doctor: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "Surgeries",
      timeStamps: false,
      underscored: true,
    }
  );
  Surgery.associate = (models) => {
    Surgery.belongsTo(models.Patient_Surgeries, {
      foreignKey: "surgery_id",
      as: "patient_surgery",
    });
  };
};

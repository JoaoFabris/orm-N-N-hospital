"use strict";

module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    "Surgery",
    {
      surgery_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
  return Surgery;
};

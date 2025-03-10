module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define(
      "Plan",
      {
        planId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        coverage: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
      },
      {
        tableName: "Plans",
        timestamps: false, // Se não quiser createdAt e updatedAt
      }
    );
  
    // Definição de associações (se houver)
    Plan.associate = (models) => {
      Plan.hasMany(models.Patient, {
        foreignKey: "plan_id",
        as: "patients",
      });
    };
}
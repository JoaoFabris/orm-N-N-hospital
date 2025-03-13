module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define(
      "Plan",
      {
        plan_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        coverage: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE, // useful for scientific calculations
          allowNull: false,
        },
      },
      {
        underscored: true,
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

    return Plan;
}
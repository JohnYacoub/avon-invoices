module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define("Invoice", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    invoice_Number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rental_date: {
      type: DataTypes.STRING
    },
    return_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance_due: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicle_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });

  return Invoice

  // ## tables relations
  // Invoice.associate = (models)=>{
  //   Invoice.belongsTo(models.modelname, {
  //     foreignKey: "",
  //     odDelete:"",
  //   })
  // }

}
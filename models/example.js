module.exports = function(sequelize, DataTypes) {
  var PurchaseOrders = sequelize.define("purchase_orders", {
    projectName: DataTypes.STRING,
    requestorName: DataTypes.STRING,
    materialDescription: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    needByDate: DataTypes.DATE,
    dateSubmitted: DataTypes.DATE,
    dateOrdered: DataTypes.DATE,
    confirmedDeliveryDate: DataTypes.DATE,
    requestorNumber: DataTypes.INTEGER,
    buyer: DataTypes.STRING,
    status: DataTypes.STRING,
    deliveryStatus: DataTypes.STRING,
    deliveryDateDelta: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  });
  return PurchaseOrders;
};

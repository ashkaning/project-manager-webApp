module.exports = function(sequelize, DataTypes){
    var Services = sequelize.define("Services",{
        serviceName: DataTypes.STRING,
        serviceDescription: DataTypes.STRING,
        subId: DataTypes.INTEGER
    });
    return Services;
}
module.exports = function (sequelize, DataTypes) {
    var Client_Service = sequelize.define("Client_Service", {
        description: DataTypes.STRING,
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        employeeId: DataTypes.INTEGER
    });

    Client_Service.associate = function (models) {
        Client_Service.belongsTo(
            models.Users, {
            foreignKey: {
                allowNull: false,
                name: 'clientId'
            }
        })
        Client_Service.belongsTo(
            models.Services, {
            foreignKey: {
                allowNull: false
            }
        }
        );
    }
    return Client_Service;
}

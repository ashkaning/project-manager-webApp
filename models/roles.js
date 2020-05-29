module.exports = function(sequelize, DataType){
    var Roles = sequelize.define("Roles",{
        name: DataType.STRING,
        description: DataType.STRING
    });
    /* Roles.associate = function (models) {
        Roles.hasMany(models.Users, {
            onDelete: "cascade"
        });
    }; */
    return Roles;
}
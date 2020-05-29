module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define("Comments",{
        comment: DataTypes.TEXT
    })
    Comments.associate = function(models){
        Comments.belongsTo(models.Client_Service, {
            foreignKey: {allowNull: false}
        })
        Comments.belongsTo(models.Users, {
            foreignKey: {allowNull: false}
        })
    }
    return Comments;
}
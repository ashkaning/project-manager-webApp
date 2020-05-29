module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        fName: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true
            }
        },
        lName: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true
            }
        },
        address: {
            type: DataTypes.STRING
        },
        addressUnit: {
            type: DataTypes.STRING
        },
        addressState:{
            type: DataTypes.STRING
        },
        addressCity:{
            type: DataTypes.STRING
        },
        addressZip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [5]
            }
        },
        email:{
            type:DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phone:{
            type: DataTypes.INTEGER,
            validate: {
                len: [10]
            }
        },
        companyName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        logo: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }

    });
    Users.associate = function (models) {
        Users.belongsTo(models.Roles, {
          foreignKey: {
            allowNull: true
          }
        });
    }
    return Users;
}

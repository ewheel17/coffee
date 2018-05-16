module.exports = function(sequelize, Sequelize) {

    var Coffee = sequelize.define('coffee', {

        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bean_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        roast: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile3: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile4: {
            type: Sequelize.STRING,
            allowNull: true
        },
        origin1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        origin2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        origin3: {
            type: Sequelize.STRING,
            allowNull: true
        },
        decaf: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
    return Coffee;
}
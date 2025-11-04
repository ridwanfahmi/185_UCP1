module.exports = (sequelize, DataTypes) => {
    const Kandang = sequelize.define('Kandang', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usia_hewan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jenis_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tahun_lahir: {
            type: DataTypes.STRING,
            allowNull: false
        }        

    }, {
        tableName: 'kandang',
        timestamps: true,
        freezeTableName: true
    });
    return Kandang;
}

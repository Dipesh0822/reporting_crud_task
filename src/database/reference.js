function applyForeignKeySetup(connSequelize) {
	// const { User } = connSequelize.models;
	// Meditation.hasMany(User, { constraints: true, foreignKey: { name: 'MEDITATION_ID', allowNull: false } });
	// User.belongsTo(Meditation, { constraints: true, foreignKey: { name: 'MEDITATION_ID', allowNull: false } });
	// Meditation.hasMany(User, { constraints: true, foreignKey: { name: 'NEXT_MEDITATION_ID', allowNull: false } });
	// User.belongsTo(Meditation, { constraints: true, foreignKey: { name: 'NEXT_MEDITATION_ID', allowNull: false } });
	// User.hasMany(Step, { constraints: true, foreignKey: { name: 'USER_ID', allowNull: false } });
	// Step.belongsTo(User, { constraints: true, foreignKey: { name: 'USER_ID', allowNull: false } });
	// Company.hasOne(Admin, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
	// Admin.belongsTo(Company, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
	// Company.hasOne(User, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
	// User.belongsTo(Company, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
}
module.exports = { applyForeignKeySetup };
function applyForeignKeySetup(connSequelize) {
	const { tickets, replies } = connSequelize.models;
	tickets.hasMany(replies, { constraints: true, foreignKey: { name: 'ticket_id', allowNull: false } });
	replies.belongsTo(tickets, { constraints: true, foreignKey: { name: 'ticket_id', allowNull: false } });
	// Meditation.hasMany(User, { constraints: true, foreignKey: { name: 'MEDITATION_ID', allowNull: false } });
	// User.belongsTo(Meditation, { constraints: true, foreignKey: { name: 'MEDITATION_ID', allowNull: false } });
	// Meditation.hasMany(User, { constraints: true, foreignKey: { name: 'NEXT_MEDITATION_ID', allowNull: false } });
	// User.belongsTo(Meditation, { constraints: true, foreignKey: { name: 'NEXT_MEDITATION_ID', allowNull: false } });
	// Company.hasOne(Admin, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
	// Admin.belongsTo(Company, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
	// Company.hasOne(User, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
	// User.belongsTo(Company, { constraints: true, foreignKey: { name: 'COMPANY_ID', allowNull: true } });
}
module.exports = { applyForeignKeySetup };
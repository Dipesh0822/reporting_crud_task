function applyForeignKeySetup(connSequelize) {
	const { tickets, replies, users, files } = connSequelize.models;
	tickets.hasMany(replies, { constraints: true, foreignKey: { name: 'ticket_id', allowNull: false } });
	replies.belongsTo(tickets, { constraints: true, foreignKey: { name: 'ticket_id', allowNull: false } });
	users.hasMany(tickets, { constraints: true, foreignKey: { name: 'user_id', allowNull: false } });
	tickets.belongsTo(users, { constraints: true, foreignKey: { name: 'user_id', allowNull: false } });
	users.hasMany(replies, { constraints: true, foreignKey: { name: 'user_id', allowNull: false } });
	replies.belongsTo(users, { constraints: true, foreignKey: { name: 'user_id', allowNull: false } });
	files.hasMany(tickets, { constraints: true, foreignKey: { name: 'file_id', allowNull: true } });
	tickets.belongsTo(files, { constraints: true, foreignKey: { name: 'file_id', allowNull: true } });
	files.hasMany(replies, { constraints: true, foreignKey: { name: 'file_id', allowNull: true } });
	replies.belongsTo(files, { constraints: true, foreignKey: { name: 'file_id', allowNull: true } });
}
module.exports = { applyForeignKeySetup };
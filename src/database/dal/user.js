

const { models } = require("./../init");
const { Op } = require("sequelize");


const create = (payload) => {
    return models.users.create(payload);
}

const update = async (id, payload) => {
    const user = await models.users.findByPk(id)
    if (!user) {
        throw new Error('not found')
    }
    return user.update(payload);
}

const getById = async (id) => {
    const user = await models.users.findByPk(id);
    if (!user) {
        throw new Error('not found')
    }
    return user;
}

const deleteById = async (id) => {
    const numDeletedRecipes = await models.users.destroy({
        where: { id }
    })
    return !!numDeletedRecipes
}

const getAll = async (filters) => {
    let page = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return models.users.findAll({
        limit: 10,
        offset: page
    })
}

const checkNameExists = async (email, id) => {
    let userWithName;
    if (!!id) {
        userWithName = await models.users.count({
            where: { [Op.or]: { id: id, email: email } }
        })
        return userWithName !== 1
    }
    userWithName = await models.users.findOne({
        where: { email }
    })
    return !userWithName
}

module.exports = { create, update, getById, deleteById, getAll, checkNameExists };

const { models } = require("./../init");
const { Op } = require("sequelize");

const create = (payload) => {
    return models.tickets.create(payload)
}

const update = async (id, payload) => {
    const ticket = await models.tickets.findByPk(id)
    if (!ticket) {
        throw new Error('not found')
    }
    return ticket.update(payload)
}

const getById = async (id) => {
    const ticket = await models.tickets.findByPk(id)
    if (!ticket) {
        throw new Error('not found')
    }
    return ticket
}

const deleteById = async (id) => {
    const numDeletedRecipes = await models.tickets.destroy({
        where: { id }
    })

    return !!numDeletedRecipes
}

const getAll = async (filters) => {
    let page = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return models.tickets.findAll({
        limit: 10,
        offset: page
    })
}

const checkTitleExists = async (title, id) => {
    let ticketWithTitle;
    if (!!id) {
        ticketWithTitle = await models.tickets.count({
            where: { [Op.or]: { id: id, title: title } }
        })
        return ticketWithTitle !== 1
    }
    ticketWithTitle = await models.tickets.findOne({
        where: { title }
    })
    return !ticketWithTitle
}

module.exports = { create, update, getById, deleteById, getAll, checkTitleExists };
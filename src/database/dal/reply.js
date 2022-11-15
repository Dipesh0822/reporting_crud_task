
const { models } = require("./../init");

const create = (payload) => {
    return models.replies.create(payload)
}

const update = async (id, payload) => {
    const reply = await models.replies.findByPk(id)
    if (!reply) {
        throw new Error('not found')
    }
    return reply.update(payload)
}

const getById = async (id) => {
    const reply = await models.replies.findByPk(id)
    if (!reply) {
        throw new Error('not found')
    }
    return reply
}

const deleteById = async (id) => {
    const numDeletedRecipes = await models.replies.destroy({
        where: { id }
    })

    return !!numDeletedRecipes
}

const getAll = async (filters) => {
    let page = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return models.replies.findAll({
        limit: 10,
        offset: page
    })
}

module.exports = { create, update, getById, deleteById, getAll };
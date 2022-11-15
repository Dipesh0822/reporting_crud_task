
const { models } = require("./../init");

const create = (payload) => {
    return models.files.create(payload)
}

const getById = async (id) => {
    const file = await models.files.findByPk(id)
    if (!file) {
        throw new Error('not found')
    }
    return file
}

const deleteById = async (id) => {
    const numDeletedRecipes = await models.files.destroy({
        where: { id }
    })

    return !!numDeletedRecipes
}

const getAll = async (filters) => {
    let page = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return models.files.findAll({
        limit: 10,
        offset: page
    })
}

module.exports = { create, getById, deleteById, getAll };
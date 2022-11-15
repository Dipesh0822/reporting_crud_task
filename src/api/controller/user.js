

const { create: serviceCreate, update: serviceUpdate,
    getById: serviceOneId, deleteById: serviceOneDelete,
    getAll: serviceAll } = require('./../../database/services/user')

const create = async (payload) => {
    const user = await serviceCreate(payload)
    return user
}

const update = async (id, payload) => {
    const user = await serviceUpdate(id, payload)
    return user
}

const getById = async (id) => {
    const user = await serviceOneId(id)
    return user
}

const deleteById = async (id) => {
    return await serviceOneDelete(id)
}

const getAll = async (filters) => {
    const users = await serviceAll(filters)
    return users
}

module.exports = { create, update, getById, deleteById, getAll };
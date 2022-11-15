const { create: serviceCreate, update: serviceUpdate,
    getById: serviceOneId, deleteById: serviceOneDelete,
    getAll: serviceAll } = require('./../../database/services/reply')

const create = async (payload) => {
    const reply = await serviceCreate(payload)
    return reply
}

const update = async (id, payload) => {
    const reply = await serviceUpdate(id, payload)
    return reply
}

const getById = async (id) => {
    const reply = await serviceOneId(id)
    return reply
}

const deleteById = async (id) => {
    return await serviceOneDelete(id)
}

const getAll = async (filters) => {
    const replies = await serviceAll(filters)
    return replies
}

module.exports = { create, update, getById, deleteById, getAll };
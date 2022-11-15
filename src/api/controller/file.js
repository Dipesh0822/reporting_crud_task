const { create: serviceCreate, getById: serviceOneId, 
    deleteById: serviceOneDelete, getAll: serviceAll } = require('./../../database/services/file')

const create = async (payload) => {
    const file = await serviceCreate(payload)
    return file
}

const getById = async (id) => {
    const file = await serviceOneId(id)
    return file
}

const deleteById = async (id) => {
    return await serviceOneDelete(id)
}

const getAll = async (filters) => {
    const files = await serviceAll(filters)
    return files
}

module.exports = { create, getById, deleteById, getAll };
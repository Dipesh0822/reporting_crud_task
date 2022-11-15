
const { create: queryCreate, getById: queryFindOne,
    deleteById: queryDelete, getAll: queryAll } = require('./../dal/file')


const create = async (payload) => {
    return queryCreate(payload)
}

const getById = async (id) => {
    return queryFindOne(id)
}

const deleteById = async (id) => {
    return queryDelete(id)
}

const getAll = async (filters) => {
    return queryAll(filters)
}

module.exports = { create, getById, deleteById, getAll };
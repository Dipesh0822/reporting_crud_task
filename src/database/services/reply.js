
const { create: queryCreate, getById: queryFindOne,
    update: queryUpdate, deleteById: queryDelete, 
    getAll: queryAll } = require('./../dal/reply')


const create = async (payload) => {
    return queryCreate(payload)
}

const getById = async (id) => {
    return queryFindOne(id)
}

const update = async (id, payload) => {
    return queryUpdate(id, payload)
}

const deleteById = async (id) => {
    return queryDelete(id)
}

const getAll = async (filters) => {
    return queryAll(filters)
}

module.exports = { create, update, getById, deleteById, getAll };


const mapper = require('./mapper')
const service = require('./../../../database/services/user')

const create = async (payload) => {
    return mapper.toUser(await service.create(payload))
}

const update = async (id, payload) => {
    return mapper.toUser(await service.update(id, payload))
}

const getById = async (id) => {
    return mapper.toUser(await service.getById(id))
}

const deleteById = (id) => {
    return service.deleteById(id)
}

const getAll = async (filters) => {
    const users = await service.getAll(filters)
    return users
}

module.exports = { create, update, getById, deleteById, getAll };
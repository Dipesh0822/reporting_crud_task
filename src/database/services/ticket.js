
const { checkTitleExists, create: queryCreate, getById: queryFindOne,
    update: queryUpdate, deleteById: queryDelete, getAll: queryAll } = require('./../dal/ticket')


const create = async (payload) => {
    let title = payload.title
    const titleExists = await checkTitleExists(title)
    if (!titleExists) {
        throw new Error('Ticket is already exist')
    }
    return queryCreate(payload)
}

const getById = async (id) => {
    return queryFindOne(id)
}

const update = async (id, payload) => {
    let title = !!payload.title ? payload.title : null;
    let titleExists;
    if (!title) {
        throw new Error('Title is fill up')
    }
    titleExists = await checkTitleExists(title, id)
    if (titleExists) {
        throw new Error('Title is already exist')
    }
    return queryUpdate(id, payload)
}

const deleteById = async (id) => {
    return queryDelete(id)
}

const getAll = async (filters) => {
    return queryAll(filters)
}

module.exports = { create, update, getById, deleteById, getAll };
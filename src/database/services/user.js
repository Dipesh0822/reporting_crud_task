
const userDal = require('./../dal/user')

const create = async (payload) => {
    let email = payload.email
    const emailExists = await userDal.checkNameExists(email)
    if (!emailExists) {
        throw new Error('User is already exist')
    }
    return userDal.create(payload)
}

const getById = async (id) => {
    return userDal.getById(id)
}

const update = async (id, payload) => {
    let email = !!payload.email ? payload.email : null;

    if (!email) {
        throw new Error('User is fill up')
    }
    let emailExists = await userDal.checkNameExists(email, id)
    if (emailExists) {
        throw new Error('User is already exist')
    }
    return userDal.update(id, payload)
}

const deleteById = async (id) => {
    return userDal.deleteById(id)
}

const getAll = async (filters) => {
    return userDal.getAll(filters)
}

module.exports = { create, update, getById, deleteById, getAll };
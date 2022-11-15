
const { checkShortTitleExists, create: queryCreate, getById: queryFindOne,
    update: queryUpdate, deleteById: queryDelete, getAll: queryAll,
    getReport: queryReport } = require('./../dal/report')


const create = async (payload) => {
    let short_title = payload.short_title
    const titleExists = await checkShortTitleExists(short_title)
    if (!titleExists) {
        throw new Error('Report is already exist')
    }
    return queryCreate(payload)
}

const getById = async (id) => {
    return queryFindOne(id)
}

const update = async (id, payload) => {
    let short_title = !!payload.short_title ? payload.short_title : null;
    let titleExists;
    if (!short_title) {
        throw new Error('Short Title is fill up')
    }
    titleExists = await checkShortTitleExists(short_title, id)
    if (titleExists) {
        throw new Error('Short Title is already exist')
    }
    return queryUpdate(id, payload)
}

const deleteById = async (id) => {
    return queryDelete(id)
}

const getAll = async (filters) => {
    return queryAll(filters)
}

const getDynamicReport = async (strSql) => {
    return queryReport(strSql)
}

module.exports = { create, update, getById, deleteById, getAll, getDynamicReport };
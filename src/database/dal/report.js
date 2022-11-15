
const { models } = require("./../init");
const { Op, QueryTypes } = require("sequelize");
const rawQuery = require('./../init')

const create = (payload) => {
    return models.reports.create(payload)
}

const update = async (id, payload) => {
    const report = await models.reports.findByPk(id)
    if (!report) {
        throw new Error('not found')
    }
    return report.update(payload)
}

const getById = async (id) => {
    const report = await models.reports.findByPk(id)
    if (!report) {
        throw new Error('not found')
    }
    return report
}

const deleteById = async (id) => {
    const numDeletedRecipes = await models.reports.destroy({
        where: { id }
    })

    return !!numDeletedRecipes
}

const getAll = async (filters) => {
    let page = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return models.reports.findAll({
        limit: 10,
        offset: page
    })
}

const checkShortTitleExists = async (short_title, id) => {
    let reportWithShortTitle;
    if (!!id) {
        reportWithShortTitle = await models.reports.count({
            where: { [Op.or]: { id: id, short_title: short_title } }
        })
        return reportWithShortTitle !== 1
    }

    reportWithShortTitle = await models.reports.findOne({
        where: { short_title }
    })


    return !reportWithShortTitle
}

const getReport = async (strSql) => {
    let report = await rawQuery.query(
        `${strSql}`,
        {
            type: QueryTypes.SELECT,
            raw: true
        }
    );
    return report;
}

module.exports = { create, update, getById, deleteById, getAll, checkShortTitleExists, getReport };
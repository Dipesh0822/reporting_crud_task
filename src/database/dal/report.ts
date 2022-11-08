
import { Op, QueryTypes } from 'sequelize'
import sequelizeConnection from './../../connection/database'
import { Report } from '../models'
import { ReportInput, ReportOutput } from '../models/report'
import { GetAllUsersFilters } from './types'
import { UserReportOutput } from '../models/user'

export const create = (payload: ReportInput): Promise<ReportOutput> => {
    return Report.create(payload)
}

export const update = async (id: number, payload: Partial<ReportInput>): Promise<ReportOutput> => {
    const report = await Report.findByPk(id)

    if (!report) {
        throw new Error('not found')
    }

    return report.update(payload)
}

export const getById = async (id: number): Promise<ReportOutput> => {
    const report = await Report.findByPk(id)

    if (!report) {
        throw new Error('not found')
    }

    return report
}

export const deleteById = async (id: number): Promise<boolean> => {
    const numDeletedRecipes = await Report.destroy({
        where: { id }
    })

    return !!numDeletedRecipes
}

export const getAll = async (filters: GetAllUsersFilters): Promise<ReportOutput[]> => {
    let page: number | undefined = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return Report.findAll({
        limit: 10,
        offset: page
    })
}

export const checkShortTitleExists = async (short_title: string, id?: number): Promise<boolean> => {
    let reportWithShortTitle;
    if (!!id) {
        reportWithShortTitle = await Report.count({
            where: { [Op.or]: { id: id, short_title: short_title } }
        })
        return reportWithShortTitle !== 1
    }

    reportWithShortTitle = await Report.findOne({
        where: { short_title }
    })


    return !reportWithShortTitle
}

export const getReport = async (strSql: string): Promise<UserReportOutput[]> => {
    let report: UserReportOutput[] = await sequelizeConnection.query(
        `${strSql}`,
        {
            type: QueryTypes.SELECT,
            raw: true
        }
    );
    return report;
}

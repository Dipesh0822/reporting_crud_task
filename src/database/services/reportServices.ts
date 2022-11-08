import * as reportDal from '../dal/report'
import { GetAllReportsFilters } from '../dal/types'
import { ReportInput, ReportOutput } from '../models/report'
import {  UserReportOutput } from '../models/user'


export const create = async (payload: ReportInput): Promise<ReportOutput> => {
    let short_title = payload.short_title
    const titleExists = await reportDal.checkShortTitleExists(short_title)
    if (!titleExists) {
        throw new Error('User is already exist')
    }
    return reportDal.create(payload)
}

export const getById = async (id: number): Promise<ReportOutput> => {
    return reportDal.getById(id)
}

export const update = async (id: number, payload: Partial<ReportOutput>): Promise<ReportOutput> => {
    let short_title: string | undefined = !!payload.short_title ? payload.short_title : undefined;
    let titleExists;
    if (!short_title) {
        throw new Error('Short Title is fill up')
    }
    titleExists = await reportDal.checkShortTitleExists(short_title, id)
    if (titleExists) {
        throw new Error('Short Title is already exist')
    }
    return reportDal.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
    return reportDal.deleteById(id)
}

export const getAll = async (filters: GetAllReportsFilters): Promise<ReportOutput[]> => {
    return reportDal.getAll(filters)
}

export const getDynamicReport = async (strSql: string): Promise<UserReportOutput[]> => {
    return reportDal.getReport(strSql)
}

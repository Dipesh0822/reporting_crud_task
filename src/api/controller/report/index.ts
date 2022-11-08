import { Report, ReportUser } from './../../interface/index'
import * as mapper from './mapper'
import * as service from './../../../database/services/reportServices'
import { CreateReportDTO, UpdateReportDTO } from '../../dto/report.dto'
import { GetAllReportsFilters } from '../../../database/dal/types'



export const create = async (payload: CreateReportDTO): Promise<Report> => {
    return mapper.toReport(await service.create(payload))
}

export const update = async (id: number, payload: UpdateReportDTO): Promise<Report> => {
    return mapper.toReport(await service.update(id, payload))
}

export const getById = async (id: number): Promise<Report> => {
    return mapper.toReport(await service.getById(id))
}

export const deleteById = (id: number): Promise<boolean> => {
    return service.deleteById(id)
}

export const getAll = async (filters: GetAllReportsFilters): Promise<Report[]> => {
    const reports = await service.getAll(filters)
    return reports
}

export const report = async (payload: string): Promise<ReportUser[]> => {
    const report = await service.getDynamicReport(payload);
    return report;
}
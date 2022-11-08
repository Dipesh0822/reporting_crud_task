import { Optional } from 'sequelize/types'


export type CreateReportDTO = {
    short_title: string;
    title: string;
    status: string;
    paramaters: string;
    sql_string: string;
}

export type UpdateReportDTO = Optional<CreateReportDTO, 'short_title'>


export type DynamicReportDTO = {
    id: number;
    parameters: any;
    limit: number;
    offset: number;
}

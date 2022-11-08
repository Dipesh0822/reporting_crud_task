
import { ReportOutput } from "./../../../database/models/report"
import { Report } from "./../../interface/index"

export const toReport = (report: ReportOutput): Report => ({
    id: report.id,
    short_title: report.short_title,
    title: report.title,
    status: report.status,
    paramaters: report.status,
    sql_string: report.sql_string,
    created_at: report.created_at,
    updated_at: report.updated_at
})
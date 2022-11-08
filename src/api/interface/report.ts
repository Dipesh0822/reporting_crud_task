export interface Report {
    id: number
    short_title: string;
    title: string;
    status: string;
    paramaters: string;
    sql_string: string;
    created_at: Date
    updated_at: Date
}
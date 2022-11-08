export interface User {
  id: number
  email: string
  country_code: string
  status: string
  created_at: Date
  updated_at: Date
}


export interface ReportUser {
  id: number
  email: string
  created_at: Date
}

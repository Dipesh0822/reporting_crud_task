import { Optional } from 'sequelize/types'


export type CreateUserDTO = {
  email: string;
  status: string;
  country_code: string;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'email'>


import { User } from './../../interface/index'
import * as mapper from './mapper'
import * as service from './../../../database/services/userServices'
import { CreateUserDTO, UpdateUserDTO } from '../../dto/user.dto'
import { GetAllUsersFilters } from '../../../database/dal/types'


export const create = async (payload: CreateUserDTO): Promise<User> => {
    return mapper.toUser(await service.create(payload))
}

export const update = async (id: number, payload: UpdateUserDTO): Promise<User> => {
    return mapper.toUser(await service.update(id, payload))
}

export const getById = async (id: number): Promise<User> => {
    return mapper.toUser(await service.getById(id))
}

export const deleteById = (id: number): Promise<boolean> => {
    return service.deleteById(id)
}

export const getAll = async (filters: GetAllUsersFilters): Promise<User[]> => {
    const users = await service.getAll(filters)
    return users
}
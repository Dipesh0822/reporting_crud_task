import * as userDal from '../dal/user'
import { GetAllUsersFilters } from '../dal/types'
import { UserInput, UserOutput } from '../models/user'


export const create = async (payload: UserInput): Promise<UserOutput> => {
    let email = payload.email
    const emailExists = await userDal.checkNameExists(email)
    if (!emailExists) {
        throw new Error('User is already exist')
    }
    return userDal.create(payload)
}

export const getById = async (id: number): Promise<UserOutput> => {
    return userDal.getById(id)
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    let email: string | undefined = !!payload.email ? payload.email : undefined;
    
    if (!email) {
        throw new Error('User is fill up')
    }
    let emailExists = await userDal.checkNameExists(email, id)
    if (emailExists) {
        throw new Error('User is already exist')
    }
    return userDal.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
    return userDal.deleteById(id)
}

export const getAll = async (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
    return userDal.getAll(filters)
}

import { Op } from 'sequelize'
import { User } from '../models'
import { UserInput, UserOutput } from '../models/user'
import { GetAllUsersFilters } from './types'

export const create = (payload: UserInput): Promise<UserOutput> => {
    return User.create(payload)
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(id)

    if (!user) {
        throw new Error('not found')
    }

    return user.update(payload)
}

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await User.findByPk(id)

    if (!user) {
        throw new Error('not found')
    }

    return user
}

export const deleteById = async (id: number): Promise<boolean> => {
    const numDeletedRecipes = await User.destroy({
        where: { id }
    })

    return !!numDeletedRecipes
}

export const getAll = async (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
    let page: number | undefined = 0;
    if (!!filters) {
        page = Number(filters.page) === 1 ? 0 : Number(filters.page) * 10
    }
    return User.findAll({
        limit: 10,
        offset: page
    })
}

export const checkNameExists = async (email: string, id?: number): Promise<boolean> => {
    let userWithName;
    if (!!id) {
        userWithName = await User.count({
            where: { [Op.or]: { id: id, email: email } }
        })
        return userWithName !== 1
    }
    userWithName = await User.findOne({
        where: { email }
    })
    return !userWithName
}
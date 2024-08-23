// @ts-ignore
import mock from '@/mocks/user.json'
import User from '../types/User.ts'

const UserHook = () => {
    const mockParsed = JSON.parse(JSON.stringify(mock))

    const resolveMock = (id: number | string) => {
        return mockParsed.find((user: User) => user.id == id)
    }

    const getAll = () => {
        return mockParsed
    }

    return { resolveMock, getAll }
}

export default UserHook

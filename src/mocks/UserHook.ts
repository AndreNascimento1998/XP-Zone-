import mock from "@/mocks/user.json"

const UserHook = () => {
    const mockParsed = JSON.parse(JSON.stringify(mock))

    const resolveMock = (id: any) => {
        return mockParsed.find((user: any) => user.id == id)
    }

    const getAll = () => {
        return mockParsed
    }

    return { resolveMock, getAll }
}

export default UserHook
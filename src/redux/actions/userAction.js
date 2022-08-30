import { FETCH_USERS } from "../action-types/user-types"

export const userAction = (users) => {
    return {
        type: FETCH_USERS,
        payload: users
    }
}
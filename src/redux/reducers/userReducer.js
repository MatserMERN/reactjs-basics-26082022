import { FETCH_USERS } from "../action-types/user-types"

const initialState = {
    users: []
}

export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS: 
            return {
                ...state, users: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

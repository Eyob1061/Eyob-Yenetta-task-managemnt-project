import * as actionType from "../actions/type"
const initialState = []
export const todosReducers = (state = initialState, action) =>{
    switch(action.type){
        case actionType.ADDNEW_TODO:
            return [action.payload, ...state]
        case actionType.GETALL_TODO:
            return action.payload
        default:
            return initialState
    }
}
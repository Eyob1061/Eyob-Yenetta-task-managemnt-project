import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {todosReducers} from "./reducers/todosReducer";
import { tabReducer } from "./reducers/tabRedcuer";
const reducer = combineReducers({
    currentTab : tabReducer,
    todos: todosReducers,
})


const middleware = [thunk]
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
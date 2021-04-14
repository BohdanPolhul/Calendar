import { combineReducers, createStore } from "redux";
import Calendar_Reducer from "./Calendar_Readucer";

let reducers = combineReducers({
    Calendar_Reducer:Calendar_Reducer
    
})

let store = createStore(reducers)


export default store;
window.store=store;
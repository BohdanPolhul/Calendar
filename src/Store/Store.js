import { useState } from "react"
import Calendar_Reducer from './Calendar_Readucer'
const [day,setDay] = useState('');
const [month,setMonth] = useState('');
let rerenderEntire=()=>{
    console.log("State change....")
}
let store = {
    state:{
        Calendar:[{day:day,month:month}]
    },
    dispatch(action){
        this.state = Calendar_Reducer(this.state,action,setDay,setMonth)
        rerenderEntire(this.state)
    },
    getState(){
        return this.state
    },
    subscribe(observer){
        rerenderEntire=observer;
    }
}
export default store;
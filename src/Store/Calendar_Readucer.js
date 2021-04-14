let MODAL_ICON='MODAL-ICON';
let initialstate ={
    Calendar:[{day:'1',month:'1'}]
}
const Calendar_Reducer = (state=initialstate,action,setDay,setMonth) =>{
  
    switch (action.type) {
        case MODAL_ICON:
            // setDay(action.day);
            // setMonth(action.month)
            state.Calendar.day=action.day;
            state.Calendar.month=action.month;
            break
        default:
            return state;
    }

    return state;
}
export let ModalIconCreator=(day,month)=>{
    return{
        type:MODAL_ICON,day:day,month:month
    }
}
export default Calendar_Reducer;
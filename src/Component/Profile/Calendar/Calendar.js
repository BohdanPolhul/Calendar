import React,{useState} from "react";
import moment from 'moment';
import Title from './Title/Title';
import CalendarGrid from './CalendarGrid/CalendarGrid';
import Monitor from './Monitor/Monitor';
import NameDay from "./NameDay/NameDay";

function Calendar(props) {
  moment.updateLocale('en', {week: {dow: 1}});
  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf('month').startOf('week');
  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'))

  return (
    <div className="Calendar">
      <Title />
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <hr className="HR"/>
      <CalendarGrid 
        startDay={startDay} 
        today={today} 
        props={props.props} 
        dispatch={props.dispatch} 
      />
      <hr className="HR"/>
      <NameDay/>
      <hr className="HR"/>
    </div>
  );
}

export default Calendar;
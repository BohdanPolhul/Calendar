/*import React from "react";
import moment from 'moment';
import styled from 'styled-components'
import Modal from "../../../Modal_Icon/ModalContainer";
import { useState } from "react";
import './CalendarGrid.css'


const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-gap: 1px;
  
`;

const CellWrapper = styled.div`
	min-height: 2.08%;
	min-width: 2.08%;
	color: #DDDDDD;
`;

const RowInCell = styled.div`
	display: flex;
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
	height: 31px;
	width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
;`

const CurrentDay = styled('div')`
  height: 100%;
  width: 100%;
  background: #f00;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({startDay,today}) => {
	const totalDays = 42;
	const day = startDay.clone().subtract(1, 'day');
	const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
	const [modalActive,setModalActive]=useState(false)
  const isCurrentDay = (day) => moment().isSame(day, 'day');
	return (
		<GridWrapper>
			
			{
				daysMap.map((dayItem) => (
					<div className="CellWrapper w-2.08 h-2.08" onClick={()=>setModalActive(true)}
						isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
					><Modal active={modalActive} setAcrive={setModalActive}/>
						<RowInCell justifyContent={'flex-end'}>
							<DayWrapper>
                {!isCurrentDay(dayItem) && dayItem.format('D')}
                {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay>}
							</DayWrapper>
						</RowInCell>
					</div>
				))
			}
			
		</GridWrapper>
	);
};*/

//export default CalendarGrid;

import React from "react";
import moment from 'moment';
import styled from 'styled-components'
import Modal from "../../../Modal_Icon/ModalContainer";
import { useState } from "react";
import './CalendarGrid.scss'
import CalendarGridContainer from "./CalendarGridContainer";
import { ModalIconCreator } from "../../../../Store/Calendar_Readucer";

const CalendarGrid = ({startDay,today,props,dispatch}) => {
	const totalDays = 42;
	const day = startDay.clone().subtract(1, 'day');
	const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
	const [modalActive,setModalActive]=useState(false)
	const [count,setCount]=useState('')
    function Data(dayItem,monthItems){
        setCount(dayItem)
        setModalActive(true); 
		dispatch(ModalIconCreator(dayItem,monthItems))
        
    }
  	const isCurrentDay = (day) => moment().isSame(day, 'day');
	return (
		<CalendarGridContainer
			totalDays={totalDays}
			
			day={day}
			daysMap={daysMap}
			isCurrentDay={isCurrentDay}
			modalActive={modalActive}
			setModalActive={setModalActive}
			count={count}
			setCount={setCount}
			Data={Data}
			state={props.Calendar_Reducer} 
			dispatch={dispatch} 
		/>
	);
};

export default CalendarGrid;

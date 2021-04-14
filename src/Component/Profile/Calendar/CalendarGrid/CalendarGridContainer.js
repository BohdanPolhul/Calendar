import React from "react";
import moment from 'moment';
import styled from 'styled-components'

import { useState } from "react";
import './CalendarGrid.scss'
import ModalContainer from "../../../Modal_Icon/ModalContainer";



const RowInCell = styled.div`
	display: flex;
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;
class CalendarGridContainer extends React.Component {
    
    render(){
        return (
            <div className="GridWrapper">
                
                {
                    this.props.daysMap.map((dayItem) => (
                        <div className="CellWrapper w-2.08 h-2.08" onClick={()=>this.props.Data(!this.props.isCurrentDay(dayItem) && dayItem.format('Do dddd'),dayItem.format('MMMM'))}
                            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
                key={dayItem.unix()}
                        >
                            <RowInCell justifyContent={'flex-end'}>
                                <div className="DayWrapper">
                    {!this.props.isCurrentDay(dayItem) && dayItem.format('D')}
                    {this.props.isCurrentDay(dayItem) && <div className="CurrentDay">{dayItem.format('D')}</div>}
                                </div>
                            </RowInCell>
                        </div>
                    ))
                }
                <ModalContainer active={this.props.modalActive} setAcrive={this.props.setModalActive} data={this.props.state.Calendar}/>
            </div>
        );
    }
	
};

export default CalendarGridContainer;

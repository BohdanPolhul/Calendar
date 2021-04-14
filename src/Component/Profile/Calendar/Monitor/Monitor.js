import React from "react";
import './Monitor.scss';
  
const Monitor = ({today,prevHandler,todayHandler,nextHandler}) => (
	<div className="DivWrapper">
    
    <div className="ButtonsWrapper">
      <div className="ButtonWrapper" onClick={prevHandler}> &lt; </div>
        <div>
          <span className="TitleWrapper">{today.format('MMMM')}</span>
          <span className="TextWrapper">{today.format('YYYY')}</span>
        </div>
      <div className="ButtonWrapper" onClick={nextHandler}> &gt; </div>
    </div>
    
  </div>

);

export default Monitor;
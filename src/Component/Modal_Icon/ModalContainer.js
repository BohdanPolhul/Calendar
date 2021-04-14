import React from 'react';
//import './EditProduct.css';
import './Modal.scss';
import 'bootstrap/dist/css/bootstrap.css';
let ModalContainer=(props)=>{
    debugger
    return(
        <div className={props.active?'modal active':"modal"} onClick={()=>props.setAcrive(false)}>
            <div className={props.active?'modal_content active':"modal_content"} onClick={e=>e.stopPropagation()}>
               <span className="close float-right " onClick={()=>props.setAcrive(false)}>x</span>
               <div className="row">
                    <div className="col">
                        <span className="row pl-5">Month</span>
                        <textarea value={props.data.month}></textarea>
                    </div>

                    <div className="col ">
                        <span className="row pl-5">Day</span>
                        <textarea value={props.data.day}></textarea>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default ModalContainer;
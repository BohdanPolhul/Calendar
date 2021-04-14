import React from 'react';
import { useState } from 'react';
import ProfileItems from '../ProfileItems/ProfileItems';
import Calendar from './Calendar/Calendar';
import 'bootstrap/dist/css/bootstrap.css';
import './profile.scss'

const Profile = (props) =>{
    return (
        <div className="row profile">
            <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ProfileItems">
                <ProfileItems/>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 Calendar " >
                <div>
                    <Calendar props={props.props} dispatch={props.dispatch} />
                </div>
            </div>  
            
           
        </div>
    )
}
export default Profile;
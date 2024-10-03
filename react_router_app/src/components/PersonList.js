import React from 'react';
// import PersonAdd from './PersonAdd';
import axios from 'axios';
// import Notification from './Notification';

import '../styles/PersonList.css'

const API_URL = process.env.REACT_APP_API_URL

const PersonList = () => {
    
            const output = axios.get("https://5000-88chinu-reactproject-p9im85warje.ws-us116.gitpod.io/persons")
            console.log(output)
            
            console.log(API_URL)
            

    return(
        <div className='person-list'>
            <h1>person list</h1>
        </div>
    )
}

export default PersonList;
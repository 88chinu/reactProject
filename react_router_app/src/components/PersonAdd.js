import React from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const PersonAdd = () => {
    const API_URL = process.env.REACT_APP_API_URL
    return(
        <div>
            <h2> This page is use for add a new person </h2>
        </div>
    )
}

export default PersonAdd;
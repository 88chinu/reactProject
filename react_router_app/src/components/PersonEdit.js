import React from 'react';
// import axios from 'axios';

import '../styles/PersonEdit.css'

const API_URL = process.env.REACT_APP_API_URL


const PersonEdit = () => {
    console.log(API_URL)
    return(
        <div className='person-edit'>
            <h2> This page is use edit the person</h2>
        </div>
    )
}

export default PersonEdit;
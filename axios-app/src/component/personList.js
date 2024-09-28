import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './personList.css'

const personList = ()=> {
    const PersonList = () => {
        const [persons, setPersons] = useState([]);
        const [newPerson, setNewPerson] = useState({ name: '', age: '' });
        const [editingPerson, setEditingPerson] = useState(null);
        const [loading, setLoading] = useState(true);





return(
    <div> <h1> Successfully Run </h1>
    </div>
)}

export default personList
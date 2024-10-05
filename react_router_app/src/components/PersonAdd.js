import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

const PersonAdd = ({ onPersonAdded = () => { } }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()
    const [showNotification, setShowNotification] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !age) return;
        try {
            const response = await axios.post(API_URL, { name, age })
            const newPersonId = response.data.id;
            // Clear form field
            setName('')
            setAge('')
            // Show success notification
            setShowNotification({ type: 'success', text: `Person "${response.data.name}" added successfully!` })
            // Navigate to the new person's detail page
            setTimeout(() => navigate(`/person/${newPersonId}`), 2000); // Wait for 2 seconds before navigating
        } catch (error) {
            console.error('Error adding person:', error)
            setShowNotification({ type: 'error', text: 'Failed to add person. Please try again.' })
        }
    };
    const handleCloseNotification = () => {
        setShowNotification(null)
    }

    return (
        <div>
            <h2> To Add a New Person </h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type='text' placeholder='Enter Name' value={name}
                    onChange={e => setName(e.target.value)} required className='input field' />
                <div className='button group'>
                    <button type='summit' className='btn btn-add'> Add Person</button>
                    <button type='summit' className='btn btn-cancel' onClick={() => navigate('/')}>Cancel</button>
                </div> </form>
            {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
        </div>
    )
}

export default PersonAdd;
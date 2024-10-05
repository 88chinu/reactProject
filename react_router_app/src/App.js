import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './components/PersonList';
import PersonDetail from './components/PersonDetail';
import PersonAdd from './components/PersonAdd';
import PersonEdit from './components/PersonEdit';

import './App.css'

const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Routes>
                    <Route path="/" element={<PersonList />} />
                    <Route path="/add" element={<PersonAdd />} />
                    <Route path="/edit" element={<PersonEdit />} />
                    <Route path="/detail" element={<PersonDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
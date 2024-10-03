import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './components/PersonList';
import PersonDetail from './components/PersonDetail';
import PersonAdd from './components/PersonAdd';
import PersonEdit from './components/PersonEdit';
import Notification from './components/Notification';
import NotFound from './components/NotFound';
import DeletePerson from './components/DeletePerson';
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
                    <Route path="/notifi" element={<Notification />} />
                    <Route path="/notf" element={<NotFound />} />
                    <Route path="/delete" element={<DeletePerson />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
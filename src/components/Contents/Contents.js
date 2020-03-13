import React, { useState } from 'react';
import demoData from '../../demoData';
import './Contents.css'
import User from '../User/User';

const Contents = () => {
    const first15 = demoData.slice(0, 15);
    const [users, setUsers] = useState(first15);
    return (
        <div className="container">
            <div className="profile-detail-container">
                {
                    users.map(user => <User user={user}>{user.name}</User>)
                }
            </div>
            <div className="add-profile-container">
                <h2>Add Profile</h2>
            </div>
        </div>
    );
};

export default Contents;
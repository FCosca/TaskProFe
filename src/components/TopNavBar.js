import React from 'react';
import '../style/TopNavBar.css'; // Assicurati di creare anche il file CSS per lo stile

const TopNavBar = ({ user }) => {
    return (
        <div className="top-nav-bar">
            <div className="logo">TaskMaster</div>
            <input type="text" className="search-input" placeholder="Start searching here ..." />
            <div className="nav-icons">
                <i className="home-icon">🏠</i>
                <i className="bookmark-icon">🔖</i>
                <i className="bell-icon">🔔</i>
                <div className="user-profile">
                    <span className="user-name">{user.firstName}</span>
                    <span className="user-name">{user.lastName}</span>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;

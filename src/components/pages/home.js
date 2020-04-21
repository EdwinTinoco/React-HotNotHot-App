import React from 'react';
import UserContainer from '../users/user-container';
// import NewAccount from '../pages/create-new-account'
import "../../style/user-profile.scss";


export default function () {
    return (
        <div className="home">
            <h1>Home Page</h1>

            <div className="home-content-wrapper">
                <UserContainer />
            </div>
        </div>
    );
}
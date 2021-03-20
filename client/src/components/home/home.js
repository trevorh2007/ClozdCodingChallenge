import React, { useState, useEffect } from 'react';
import UserList from '../user-list/userlist'

const Home = () => {
    return(
        <div className="container">
            <UserList />
        </div>
    )
}

export default Home;
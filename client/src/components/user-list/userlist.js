import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './userlist.css'

const UserList = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/v1/users')
            console.log(response.data)
            setData(response.data)
        }
        fetchUsers()
    }, [])
  
    return (
        <>
        <ul className="list-group mb-2">
            {data ? data.map(user => (
                <a href={"/"}>
                    <li key={user.id.value} className="list-group-item">
                        {
                        `Name: ${user.name.first + ' ' + user.name.last}
                        Email: ${user.email}
                        City/Country: ${user.location.city}, ${user.location.country} `
                    }
                    </li>
                </a>
            )) : ''}
        </ul>
        </>
    );
};

export default UserList;
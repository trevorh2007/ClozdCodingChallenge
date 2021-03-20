import React, { useState, useEffect } from 'react';
import axios from 'axios'

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
                <li key={user.id.value} className="list-group-item">
                    <a href={  }>
                        Name: {user.name.first + ' ' + user.name.last}{" "}
                        Email: {user.email}
                    </a>
                </li>
            )) : ''}
        </ul>
        </>
    );
};

export default UserList;
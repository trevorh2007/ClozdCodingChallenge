import React from 'react';
import UserList from '../user-list/userlist'

const Home = (props) => {
    return(
        <div className="container">
            <UserList data= {props.data} setUserData={props.setUserData}/>
        </div>
    )
}

export default Home;
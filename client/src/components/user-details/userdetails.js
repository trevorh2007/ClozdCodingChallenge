import React, {useState} from 'react';

const UserDetails = (props) => {
    const [userProps] = useState(props)
    console.log(props)

    return(
        <div className="container">
            UserDetails Page - User: {userProps.userId}
        </div>
    )
}

export default UserDetails;
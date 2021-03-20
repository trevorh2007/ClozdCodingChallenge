import React, {useState} from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { FaPhone, FaEnvelope, FaAddressCard, FaBirthdayCake } from 'react-icons/fa'
import moment from 'moment'

const UserDetails = (props) => {
    const [userData] = useState(props.user[props.userId])
    var fullAddress = `${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city} ${userData.location.state}, ${userData.location.postcode}`
    return(
        <div className="container">
{/* Include photo, full name, email, full address, phone number, and date of birth */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userData.picture.large} />
                <Card.Body>
                    <Card.Title>{userData.name.first} {userData.name.last}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><FaEnvelope /> {userData.email}</ListGroupItem>
                    <ListGroupItem><FaAddressCard /> {fullAddress}</ListGroupItem>
                    <ListGroupItem><FaPhone /> {userData.phone ? userData.phone : userData.cell}</ListGroupItem>
                    <ListGroupItem><FaBirthdayCake /> {moment(userData.dob.date).format('MMMM DD, YYYY')}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    )
}

export default UserDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './userlist.css'
import {A, setLinkProps} from 'hookrouter'
import {Row, Col} from 'react-bootstrap'

const UserList = (props) => {
    const [dataPage, setDataPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/v1/users', {
                params: {
                    page: dataPage,
                    results: 50,
                    seed: 'abc'
                }
            })
            props.setUserData(response.data)
            setDataPage(dataPage => dataPage + 1)
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreUsers();
      }, [isFetching]);

    async function fetchMoreUsers() {
        setDataPage(dataPage => dataPage + 1)
        const response = await axios.get(`/api/v1/users`, {
            params: {
                page: dataPage,
                results: 50,
                seed: 'abc'
            }
        })
        props.setUserData(data => [...data, ...response.data])
        setIsFetching(false);
    }
  
    return (
        <>
        <ul className="list-group mb-2">
            {props.data ? props.data.map((user, index) => (
                <A {...setLinkProps({href: `/user/${index}`, data: user })} key={index}>
                    <li className="list-group-item" key={index}>
                        <Row>
                            <Col md="auto">
                                {index + 1}.
                            </Col>
                            <Col md="auto">
                                {
                                    `Name: ${user.name.first + ' ' + user.name.last}
                                    Email: ${user.email}
                                    City/Country: ${user.location.city}, ${user.location.country} `
                                }
                            </Col>
                        </Row>
                    </li>
                </A>
            )) : ''}
            {isFetching && 'Fetching more users...'}
        </ul>
        </>
    );
};

export default UserList;
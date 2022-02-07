import React, { useContext, useState, useEffect } from 'react'
import { UserInfoContext } from '../../contexts/UserInfo';
import './Home.css'

const Home = () => {
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    

    useEffect(() => {
        if (loggedUser.isLoggedIn) {
            
        }
    }, [])

    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h1>E-Commerce Comput inc.</h1>
            <h2>Bienvenu sur mon site</h2>
        </div>
    )
}

export default Home
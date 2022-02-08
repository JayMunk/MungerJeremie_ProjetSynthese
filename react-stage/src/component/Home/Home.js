import React, { useContext, useState, useEffect } from 'react'
import { UserInfoContext } from '../../contexts/UserInfo';
import './Home.css'

const Home = () => {
    const [loggedUser] = useContext(UserInfoContext)


    useEffect(() => {
        if (loggedUser.isLoggedIn) {

        }
    }, [])

    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h1>Equi-go</h1>
            {loggedUser.isLoggedIn ?
                <p>Bienvenue {loggedUser.prenom} {loggedUser.nom}</p>
                :
                null
            }
            <h2>Évènement cette semaine</h2>
            <h2>Évènement ce mois ci</h2>
        </div>
    )
}

export default Home
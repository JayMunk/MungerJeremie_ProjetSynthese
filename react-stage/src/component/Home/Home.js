import React, { useContext, useState, useEffect } from 'react'
import { UserInfoContext } from '../../contexts/UserInfo'
import './Home.css'
import SlideShow from './slideShow/SlideShow'
import AfficherCompetitionThisWeek from '../Competition/afficherCompetition/AfficherCompetitionThisWeek'
import AfficherCompetitionThisMonth from '../Competition/afficherCompetition/AfficherCompetitionThisMonth'

const Home = () => {
    const [loggedUser] = useContext(UserInfoContext)

    useEffect(() => {
        if (loggedUser.isLoggedIn) {

        }
    }, [])

    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <SlideShow />
            <h1>Equi-go</h1>
            {loggedUser.isLoggedIn ?
                <p>Bienvenue {loggedUser.prenom} {loggedUser.nom}</p>
                :
                null
            }
            <div>
                <h2>Évènements au courant des 7 prochains jours</h2>
                <AfficherCompetitionThisWeek />
            </div>
            <div>
                <h2>Évènements au courant des 30 prochains jours</h2>
                <AfficherCompetitionThisMonth />
            </div>
        </div>
    )
}

export default Home
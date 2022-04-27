import { React, useEffect, useState } from 'react'
import EqupeActuel from './EqupeActuel'
import Chronometre from './Chronometre'
import ChoisirCompetitionClasse from './ChoisirCompetitionClasse'
import Resultat from './Resultat'
import OrdreDePassage from './OrdreDePassage'

const VoirLiveCompetition = () => {
    const [equipeActuelParticipant, setEquipeActuelParticipant] = useState({
        id: 1,
        prenom: "Jeremie",
        nom: "Munger"
    })
    const [equipeActuelCheval, setEquipeActuelCheval] = useState({
        id: 1,
        nom: "Bird"
    })
    const [ordreListParticipant, setOrdreListParticipant] = useState([
        {
            id: 1,
            prenom: "Jeremie",
            nom: "Munger"
        },
        {
            id: 2,
            prenom: "Jeremie2",
            nom: "Munger2"
        }
    ])
    const [ordreListCheval, setOrdreListCheval] = useState([
        {
            id: 1,
            nom: "Bird"
        },
        {
            id: 2,
            nom: "Bird2"
        }
    ])

    useEffect(() => {

    }, [])


    return (
        <body id="body">
            <ChoisirCompetitionClasse />
            <EqupeActuel prenom={equipeActuelParticipant.prenom} nom={equipeActuelParticipant.nom} nomCheval={equipeActuelCheval.nom} />
            <Chronometre />
            <Resultat />
            <OrdreDePassage listParticipant={ordreListParticipant} listCheval={ordreListCheval} />
        </body>
    )
}

export default VoirLiveCompetition
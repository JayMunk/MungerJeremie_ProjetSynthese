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
    const [resultatListParticipant, setResultatListParticipant] = useState([
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
    const [resultatListCheval, setResultatListCheval] = useState([
        {
            id: 1,
            nom: "Bird"
        },
        {
            id: 2,
            nom: "Bird2"
        }
    ])
    const [resultatListTemps, setResultatListTemps] = useState([
        "16.528", "17.125"
    ])

    //What i need
    //FORM
        //form me retourne la classeId
        //form me retourne le type de classe
    //EQUIPE ACTUEL
    //avec classeId je vais chercher l'id de l'equipe actuel
    //avec equipeId je vais chercher l'equipe actuel participant (id, prenom, nom)
    //avec equipeId je vais chercher l'equipe actuel cheval (id, nom)
    //CHRONOMETRE
    //me retourne le temps
    //POST
    //RESULTAT
    //avec classeId je vais chercher les resultats des participant (id, prenom, nom)
    //avec classeId je vais chercher les resultats des cheval (id, nom)
    //avec classeId je vais chercher les temps de l'equipe (temps)
    //ORDRE
    //avec classeId je vais chercher l'ordre participant (id, prenom, nom)
    //avec classeId je vais chercher l'ordre cheval (id, nom)


    const [classeId, setClasseId] = useState('');
    const [classeType, setClasseType] = useState('');

    const FormToParent = (classeId, classeType) => {
        console.log(classeId,"classeId")
        setClasseId(classeId);
        console.log(classeType,"classeType")
        setClasseType(classeType);
      }

    useEffect(() => {

    }, [])


    return (
        <body id="body">
            <ChoisirCompetitionClasse FormToParent={FormToParent}/>
            <EqupeActuel prenom={equipeActuelParticipant.prenom} nom={equipeActuelParticipant.nom} nomCheval={equipeActuelCheval.nom} />
            <Chronometre />
            <Resultat listParticipant={resultatListParticipant} listCheval={resultatListCheval} listTemps={resultatListTemps} />
            <OrdreDePassage listParticipant={ordreListParticipant} listCheval={ordreListCheval} />
        </body>
    )
}

export default VoirLiveCompetition
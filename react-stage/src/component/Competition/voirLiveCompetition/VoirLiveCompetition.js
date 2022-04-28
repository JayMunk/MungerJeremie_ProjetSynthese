import { React, useEffect, useState } from 'react'
import EqupeActuel from './EqupeActuel'
import Chronometre from './Chronometre'
import ChoisirCompetitionClasse from './ChoisirCompetitionClasse'
import Resultat from './Resultat'
import OrdreDePassage from './OrdreDePassage'
import ClasseService from '../../../services/ClasseService'

const VoirLiveCompetition = () => {
    const [equipeActuelParticipant, setEquipeActuelParticipant] = useState({})
    const [equipeActuelCheval, setEquipeActuelCheval] = useState({})
    const [equipeActuelTemps, setEquipeActuelTemps] = useState({})
    const [ordreListParticipant, setOrdreListParticipant] = useState([])
    const [ordreListCheval, setOrdreListCheval] = useState([])
    const [resultatListParticipant, setResultatListParticipant] = useState([])
    const [resultatListCheval, setResultatListCheval] = useState([])
    const [resultatListTemps, setResultatListTemps] = useState([])

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
    const [equipeActuelId, setEquipeActuelId] = useState('');

    const formToParent = (classeId, classeType) => {
        console.log(classeId,"classeId")
        setClasseId(classeId);
        console.log(classeType,"classeType")
        setClasseType(classeType);
    }
    const pushTime = (time) => {
        console.log(time,"time")
        console.log(("0" + Math.floor((time / 1000) % 60)).slice(-2),"time sec")
        console.log(("0" + ((time / 10) % 100)).slice(-2),"time milsec")
        setEquipeActuelTemps(time);
        //post?
    }

    useEffect( async () => {
        await getEquipeActuelId(classeId, classeType)
        await getResultats(classeId, classeType)
    }, [classeId, classeType])

    const getEquipeActuelId = async (classeId, classeType) =>{
        if (classeType == "AllerRetour") {
            setEquipeActuelId(await ClasseService.getEquipeActuelIdAllerRetour(classeId))
        } else if (classeType == "Baril") {
            setEquipeActuelId(await ClasseService.getEquipeActuelIdBaril(classeId))
        } else if (classeType == "Tour") {
            setEquipeActuelId(await ClasseService.getEquipeActuelIdTour(classeId))
        }
    }

    const getResultats = async (classeId, classeType) =>{
        if (classeType == "AllerRetour") {
            setResultatListParticipant(await ClasseService.getResultatListParticipantAllerRetour(classeId))
            setResultatListCheval(await ClasseService.getResultatListChevalAllerRetour(classeId, equipeActuelId))
            setResultatListTemps(await ClasseService.getResultatListTempsAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
            setResultatListParticipant(await ClasseService.getResultatListParticipantBaril(classeId))
            setResultatListCheval(await ClasseService.getResultatListChevalBaril(classeId, equipeActuelId))
            setResultatListTemps(await ClasseService.getResultatListTempsBaril(classeId, equipeActuelId))
        } else if (classeType == "Tour") {
            setResultatListParticipant(await ClasseService.getResultatListParticipantTour(classeId))
            setResultatListCheval(await ClasseService.getResultatListChevalTour(classeId, equipeActuelId))
            setResultatListTemps(await ClasseService.getResultatListTempsTour(classeId, equipeActuelId))
        }
    }

    useEffect( async () => {
        await getEquipeActuel(classeId, classeType, equipeActuelId)
        await getOrdre(classeId, classeType, equipeActuelId)
    }, [equipeActuelId])

    const getOrdre = async (classeId, classeType, equipeActuelId) =>{
        if (classeType == "AllerRetour") {
            console.log("setOrdreListParticipant")
            setOrdreListParticipant(await ClasseService.getOrdreListParticipantAllerRetour(classeId, equipeActuelId))
            setOrdreListCheval(await ClasseService.getOrdreListChevalAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
            setOrdreListParticipant(await ClasseService.getOrdreListParticipantBaril(classeId, equipeActuelId))
            setOrdreListCheval(await ClasseService.getOrdreListChevalBaril(classeId, equipeActuelId))
        } else if (classeType == "Tour") {
            setOrdreListParticipant(await ClasseService.getOrdreListParticipantTour(classeId, equipeActuelId))
            setOrdreListCheval(await ClasseService.getOrdreListChevalTour(classeId, equipeActuelId))
        }
    }

    const getEquipeActuel = async (classeId, classeType, equipeActuelId) =>{
        if (classeType == "AllerRetour") {
            setEquipeActuelParticipant(await ClasseService.getEquipeActuelParticipantAllerRetour(classeId, equipeActuelId))
            setEquipeActuelCheval(await ClasseService.getEquipeActuelChevalAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
            setEquipeActuelParticipant(await ClasseService.getEquipeActuelParticipantBaril(classeId, equipeActuelId))
            setEquipeActuelCheval(await ClasseService.getEquipeActuelChevalBaril(classeId, equipeActuelId))
        } else if (classeType == "Tour") {
            setEquipeActuelParticipant(await ClasseService.getEquipeActuelParticipantTour(classeId, equipeActuelId))
            setEquipeActuelCheval(await ClasseService.getEquipeActuelChevalTour(classeId, equipeActuelId))
        }
    }



    return (
        <body id="body">
            <ChoisirCompetitionClasse formToParent={formToParent}/>
            <EqupeActuel prenom={equipeActuelParticipant.prenom} nom={equipeActuelParticipant.nom} nomCheval={equipeActuelCheval.nom} />
            <Chronometre pushTime={pushTime}/>
            <Resultat listParticipant={resultatListParticipant} listCheval={resultatListCheval} listTemps={resultatListTemps} />
            <OrdreDePassage listParticipant={ordreListParticipant} listCheval={ordreListCheval} />
        </body>
    )
}

export default VoirLiveCompetition
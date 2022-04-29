import { React, useEffect, useState, useContext } from 'react'
import EqupeActuel from './EqupeActuel'
import Chronometre from './Chronometre'
import ChoisirCompetitionClasse from './ChoisirCompetitionClasse'
import Resultat from './Resultat'
import OrdreDePassage from './OrdreDePassage'
import ClasseService from '../../../services/ClasseService'
import { UserInfoContext } from '../../../contexts/UserInfo'

const VoirLiveCompetition = () => {
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    const [equipeActuelParticipant, setEquipeActuelParticipant] = useState({})
    const [equipeActuelCheval, setEquipeActuelCheval] = useState({})
    const [equipeActuelTemps, setEquipeActuelTemps] = useState({})
    const [ordreListParticipant, setOrdreListParticipant] = useState([])
    const [ordreListCheval, setOrdreListCheval] = useState([])
    const [resultatListParticipant, setResultatListParticipant] = useState([])
    const [resultatListCheval, setResultatListCheval] = useState([])
    const [resultatListTemps, setResultatListTemps] = useState([])
    const [resultatList, setResultatList] = useState([])
    const [ordreList, setOrdreList] = useState([])
    const [equipeActuel, setEquipeActuel] = useState([])

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
        //console.log(classeId, "classeId")
        setClasseId(classeId);
        //console.log(classeType, "classeType")
        setClasseType(classeType);
    }
    const pushTime = (time) => {
        //console.log(time, "time")
        //console.log(("0" + Math.floor((time / 1000) % 60)).slice(-2), "time sec")
        //console.log(("0" + ((time / 10) % 100)).slice(-2), "time milsec")
        setEquipeActuelTemps(time);
        //post?
    }

    useEffect(async () => {
        await getEquipeActuelId(classeId, classeType)
        await getResultats(classeId, classeType)
    }, [classeId, classeType])

    const getEquipeActuelId = async (classeId, classeType) => {
        if (classeType == "AllerRetour") {
            setEquipeActuelId(await ClasseService.getEquipeActuelIdAllerRetour(classeId))
        } else if (classeType == "Baril") {
            setEquipeActuelId(await ClasseService.getEquipeActuelIdBaril(classeId))
        } else if (classeType == "Tour") {
            setEquipeActuelId(await ClasseService.getEquipeActuelIdTour(classeId))
        }
    }

    const getResultats = async (classeId, classeType) => {
        if (classeType == "AllerRetour") {
            setResultatList(await ClasseService.getResultatListAllerRetour(classeId))
        } else if (classeType == "Baril") {
        } else if (classeType == "Tour") {
        }
    }

    useEffect(async () => {
        await getEquipeActuel(classeId, classeType, equipeActuelId)
        await getOrdre(classeId, classeType, equipeActuelId)
    }, [equipeActuelId])

    const getOrdre = async (classeId, classeType, equipeActuelId) => {
        if (classeType == "AllerRetour") {
            setOrdreList(await ClasseService.getOrdreListAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
        } else if (classeType == "Tour") {
        }
    }

    const getEquipeActuel = async (classeId, classeType, equipeActuelId) => {
        if (classeType == "AllerRetour") {
            setEquipeActuel(await ClasseService.getEquipeActuelAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
        } else if (classeType == "Tour") {
        }
    }



    return (
        <body id="body">
            <ChoisirCompetitionClasse formToParent={formToParent} />
            {
                Object.entries(equipeActuel).length != 0 ?
                    <EqupeActuel equipe={equipeActuel} />
                    :
                    null
            }
            {
                loggedUser.isLoggedIn && loggedUser.role === "ORGANISATION" ?
                    <Chronometre pushTime={pushTime} />
                    :
                    null
            }
            {
                resultatList.length > 0 ?
                    <Resultat resultatList={resultatList} />
                    :
                    null
            }
            {
                ordreList.length > 0 ?
                    <OrdreDePassage ordreList={ordreList} />
                    :
                    null
            }
        </body>
    )
}

export default VoirLiveCompetition
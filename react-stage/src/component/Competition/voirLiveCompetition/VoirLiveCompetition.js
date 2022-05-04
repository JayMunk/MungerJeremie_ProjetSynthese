import { React, useEffect, useState, useContext } from 'react'
import EqupeActuel from './EqupeActuel'
import Chronometre from './Chronometre'
import ChoisirCompetitionClasse from './ChoisirCompetitionClasse'
import Resultat from './Resultat'
import OrdreDePassage from './OrdreDePassage'
import ClasseService from '../../../services/ClasseService'
import { UserInfoContext } from '../../../contexts/UserInfo'

const VoirLiveCompetition = () => {
    const [loggedUser] = useContext(UserInfoContext)
    const [resultatList, setResultatList] = useState([])
    const [ordreList, setOrdreList] = useState([])
    const [classeId, setClasseId] = useState('')
    const [classeType, setClasseType] = useState('')
    const [equipeActuelId, setEquipeActuelId] = useState('')
    const [equipeActuel, setEquipeActuel] = useState([])
    const [equipeActuelTemps, setEquipeActuelTemps] = useState([])

    useEffect(async () => {
        await getEquipeActuelId(classeId, classeType)
        await getResultats(classeId, classeType)
    }, [classeId, classeType])

    useEffect(async () => {
        await getEquipeActuel(classeId, classeType, equipeActuelId)
        await getOrdre(classeId, classeType, equipeActuelId)
    }, [equipeActuelId])

    const formToParent = (classeId, classeType) => {
        setClasseId(classeId)
        setClasseType(classeType)
    }

    const pushTime = (time) => {
        //console.log(time, "time")
        //console.log(("0" + Math.floor((time / 1000) % 60)).slice(-2), "time sec")
        //console.log(("0" + ((time / 10) % 100)).slice(-2), "time milsec")
        setEquipeActuelTemps(time)
        //post?
    }

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
            setResultatList(await ClasseService.getResultatListBaril(classeId))
        } else if (classeType == "Tour") {
            setResultatList(await ClasseService.getResultatListTour(classeId))
        }
    }

    const getOrdre = async (classeId, classeType, equipeActuelId) => {
        if (classeType == "AllerRetour") {
            setOrdreList(await ClasseService.getOrdreListAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
            setOrdreList(await ClasseService.getOrdreListBaril(classeId, equipeActuelId))
        } else if (classeType == "Tour") {
            setOrdreList(await ClasseService.getOrdreListTour(classeId, equipeActuelId))
        }
    }

    const getEquipeActuel = async (classeId, classeType, equipeActuelId) => {
        if (classeType == "AllerRetour") {
            setEquipeActuel(await ClasseService.getEquipeActuelAllerRetour(classeId, equipeActuelId))
        } else if (classeType == "Baril") {
            setEquipeActuel(await ClasseService.getEquipeActuelBaril(classeId, equipeActuelId))
        } else if (classeType == "Tour") {
            setEquipeActuel(await ClasseService.getEquipeActuelTour(classeId, equipeActuelId))
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
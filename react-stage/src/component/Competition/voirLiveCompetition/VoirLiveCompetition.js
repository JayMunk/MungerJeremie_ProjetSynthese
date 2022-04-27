import { React, useState, useEffect } from 'react'
import CompetitionService from '../../../services/CompetitionService'
import Table from 'react-bootstrap/Table'
import ClasseService from '../../../services/ClasseService'

const VoirLiveCompetition = () => {
    const [listCompetitions, setListCompetitions] = useState([])
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [ordreList, setOrdreList] = useState([])
    const [ordreParticpant, setOrdreParticpant] = useState([])
    const [ordreCheval, setOrdreCheval] = useState([])
    const [resultatList, setResultatList] = useState([])
    const [equipeActuelIdx, setEquipeActuelIdx] = useState([])
    const [equipeActuel, setEquipeActuel] = useState([])

    useEffect(() => {
        const getCompetitions = async () => {
            var today = new Date()
            var dateDebut = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate() + 1)).slice(-2)
            console.log(dateDebut, "date")
            let dbCompetitions = await CompetitionService.getCompetitionsByDateYear(dateDebut)
            console.log(dbCompetitions, "dbCompetitions")
            setListCompetitions(dbCompetitions)
            values.competition = dbCompetitions[0]
            values.classe = "AllerRetour"
        }
        getCompetitions()
    }, [])

    const onChangeCompetition = (e) => {
        let competition = JSON.parse(e.target.value)
        setValueCompetition(competition)
    }

    const onChangeClasse = (e) => {
        let classe = e.target.value
        setValueClasse(classe)
    }

    const setValueCompetition = (competition) => {
        values.competition = competition
    }

    const setValueClasse = (classe) => {
        values.classe = classe

    }

    const setOrdre = (ordreList) => {
        if (ordreList.length > 1) {
            console.log("length", ordreList.length)
            console.log("participant", ordreList[0].participant)
            let listeParticpant = []
            for (var i = 0; i < ordreList.length; i++) {
                listeParticpant = [...listeParticpant, ordreList[i].participant]
            }
            console.log(listeParticpant, "setOrdreParticpant")
            setOrdreParticpant(listeParticpant)
            let listeCheval = []
            for (var i = 0; i < ordreList.length; i++) {
                listeCheval = [...listeCheval, ordreList[i].cheval]
            }
            console.log(listeCheval, "setOrdreCheval")
            setOrdreCheval(listeCheval)
            setOrdreList(ordreList)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setErrors(checkError(values))
        console.log("values", values)
        console.log("values2", values.competition.id.toString())
        if (Object.keys(checkError(values)).length === 0) {
            if (values.classe == "AllerRetour") {
                let listOrdreData = await ClasseService.getOrdreAllerRetour(values.competition.id.toString())
                setOrdre(listOrdreData)
                let listResultatData = await ClasseService.getResultatAllerRetour(values.competition.id.toString())
                setEquipeActuelValues(listResultatData)
                setResultatList(listResultatData)
            } else if (values.classe == "Baril") {
                setOrdre(await ClasseService.getOrdreBaril(values.competition.id.toString()))
                //setResultatList(await ClasseService.getOrdreBaril(values.competition.id.toString()))
            } else if (values.classe == "Tour") {
                setOrdre(await ClasseService.getOrdreTour(values.competition.id.toString()))
                //setResultatList(await ClasseService.getOrdreTour(values.competition.id.toString()))
            }
        }
    }

    const setEquipeActuelValues = async (listResultat) => {
        console.log(listResultat, "listResultat")
        if (listResultat.length > 0) {
            let idx = listResultat.length - 1
            setEquipeActuelIdx(idx)
            console.log(idx, "EquipeActuelIdx")
        } else {
            setEquipeActuelIdx(0)
            console.log(0, "EquipeActuelIdx")
        }
    }

    function checkError(values) {
        let errors = {}

        if (!values.competition) {
            errors.competition = "La competition est requise"
        }

        if (!values.classe) {
            errors.classe = "La classe est requiss"
        }

        return errors
    }

    const ordreListTable = ordreList.map((inscription, idx) =>
        <tr key={inscription.id.toString()}>
            <td>{idx + 1}</td>
            <td>{ordreParticpant[idx].prenom} {ordreParticpant[idx].nom}</td>
            <td>{ordreCheval[idx].nom}</td>
        </tr>
    )

    const afficheEquipeActuel =
        <tr>
            <td>{ordreParticpant[equipeActuelIdx].prenom} {ordreParticpant[equipeActuelIdx].nom}</td>
            <td>{ordreCheval[equipeActuelIdx].nom}</td>
        </tr>


    return (
        <body id="body">
            <form className="formInscription" onSubmit={handleSubmit}>
                <h1>Sélectionner la compétition et la classe</h1>


                <div className="form-inputs">
                    <label htmlFor="competition"
                        className="form-label">
                        Compétition
                    </label>
                    <select onChange={onChangeCompetition}>
                        {listCompetitions.map((competition) => (
                            <option value={JSON.stringify(competition)}>{competition.nom}</option>
                        ))}
                    </select>
                    {errors.competition && <p className="error">{errors.competition}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="classe"
                        className="form-label">
                        Classe
                    </label>
                    <select onChange={onChangeClasse}>
                        <option value={"AllerRetour"}>{"Aller Retour"}</option>
                        <option value={"Tour"}>{"Tour"}</option>
                        <option value={"Baril"}>{"Baril"}</option>
                    </select>
                    {errors.classe && <p className="error">{errors.classe}</p>}
                </div>

                <button className="button" type="submit">Voir compétition</button>
            </form>
            {ordreParticpant.length > 0 ?
                <div>
                    <div>
                        <div>
                            <h2>Tour actuel</h2>
                            <Table striped bordered hover variant="dark" id="tableCv">
                                <thead>
                                    <tr>
                                        <th>Nom participant</th>
                                        <th>Nom cheval</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {afficheEquipeActuel}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div>
                        <p>Chronometre</p>
                    </div>
                    <div>
                        <p>resultats</p>
                    </div>

                    <div>
                        <h2>Ordre de passage</h2>
                        <Table striped bordered hover variant="dark" id="tableCv">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nom participant</th>
                                    <th>Nom cheval</th>
                                </tr>
                            </thead>
                            <tbody>{ordreListTable}</tbody>
                        </Table>
                    </div>
                </div>
                :
                null
            }
        </body>
    )
}

export default VoirLiveCompetition
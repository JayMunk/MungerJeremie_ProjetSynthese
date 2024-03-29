import { React, useState, useEffect } from 'react'
import CompetitionService from '../../../services/CompetitionService'

const ChoisirCompetitionClasse = ({ formToParent }) => {
    const [listCompetitions, setListCompetitions] = useState([])
    const [values] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const getCompetitions = async () => {
            var today = new Date()
            var dateDebut = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate() + 1)).slice(-2)
            let dbCompetitions = await CompetitionService.getCompetitionsByDateYear(dateDebut)
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

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(checkError(values))
        if (Object.keys(checkError(values)).length === 0) {
            if (values.classe == "AllerRetour") {
                formToParent(values.competition.allerRetour.id.toString(), values.classe)
            } else if (values.classe == "Baril") {
                formToParent(values.competition.allerRetour.id.toString(), values.classe)
            } else if (values.classe == "Tour") {
                formToParent(values.competition.allerRetour.id.toString(), values.classe)
            }
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

    return (
        <div>
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
        </div>
    )
}

export default ChoisirCompetitionClasse
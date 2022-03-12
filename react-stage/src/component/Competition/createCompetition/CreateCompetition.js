import { React, useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import CompetitionService from '../../../services/CompetitionService'
import { UserInfoContext } from '../../../contexts/UserInfo'

const CreateCompetition = () => {
    const history = useHistory()
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    const [values, setValues] = useState({
        nom: "",
        date: "",
        adresse: ""
    })
    const [errors, setErrors] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = e => {


        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    function checkError(values) {
        let errors = {}
        if (!values.nom) {
            errors.nom = "Le nom est requis"
        }

        if (!values.date) {
            errors.date = "La date est requise"
        }

        if (!values.adresse) {
            errors.adresse = "L'adresse est requise"
        }

        return errors

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values, "Competition Values: ")
        setErrors(checkError(values))

        setSubmitted(true)
        if (Object.keys(checkError(values)).length === 0 || Object.keys(checkError(values)).length === undefined && submitted) {


            CompetitionService.saveCompetition(values, loggedUser.courriel)
            history.push("/addClasses")

        }
    }

    return (
        <body id="body">
            <h2>Créer une compétition</h2>
            <form onSubmit={handleSubmit} className="formInscription">

                <label>
                    Nom:
                </label>
                <input id="nom" type="text" name="nom" value={values.nom} onChange={handleChange}></input>
                {errors.nom && <p className="error">{errors.nom}</p>}

                <label>
                    Date:
                </label>
                <input id="date" type="date" name="date" value={values.date} onChange={handleChange}></input>
                {errors.date && <p className="error">{errors.date}</p>}

                <label>
                    Adresse:
                </label>
                <input id="adresse" type="text" name="adresse" value={values.adresse} onChange={handleChange}></input>
                {errors.adresse && <p className="error">{errors.adresse}</p>}

                <button type="submit" className="button btn btn-primary">Créer compétition</button>
            </form >
        </body>
    )
}

export default CreateCompetition
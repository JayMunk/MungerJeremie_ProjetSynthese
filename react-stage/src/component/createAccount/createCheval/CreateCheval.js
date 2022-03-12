import { React, useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom"
import ChevalService from '../../../services/ChevalService'
import { UserInfoContext } from '../../../contexts/UserInfo'

const CreateCheval = () => {
    const history = useHistory()
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    const [values, setValues] = useState({
        nom: "",
        sexe: "",
        vaccinated: false,
        coggingTested: false,
        aqhanumber: "",
        dateOfBirth: "",
        fatherName: "",
        motherName: "",
        origineCountry: "",
        origineState: "",
    })
    const [errors, setErrors] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const listSexe = ["Hongre", "Étalon", "Jument"]
    const listCountry = ["Canada", "États-Unis", "Inconnue"]
    const listStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 'Tennessee', "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    const listProvinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"]
    const [listOrigineState, setListOrigineState] = useState([])
    const [vaccinated, setVaccinated] = useState(false)
    const [coggingTested, setCoggingTested] = useState(false)

    useEffect(() => {
        values.sexe = "Hongre"
        values.origineCountry = "Canada"
        setListOrigineState(listProvinces)
        values.origineState = "Alberta"
    }, [])


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
            errors.nom = "Nom requis"
        }

        if (values.origineCountry && !values.origineState) {
            errors.origineState = "L'état ou la province d'origine est requise"
        }

        if (!values.sexe) {
            errors.sexe = "Le sexe du cheval est requis"
        }

        return errors

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        values.vaccinated = vaccinated
        values.coggingTested = coggingTested
        console.log(values, "Cheval Values: ")
        setErrors(checkError(values))

        setSubmitted(true)
        if (Object.keys(checkError(values)).length === 0 || Object.keys(checkError(values)).length === undefined && submitted) {

            await ChevalService.saveCheval(values, loggedUser.courriel)
            history.push("/myHorses")
        }
    }

    const onChangeSexe = (e) => {
        console.log(e, "e onChangeSexe")
        let sexe = JSON.parse(e.target.value)
        console.log(sexe, "sexe onChangeSexe")
        values.sexe = sexe
    }

    const onChangeOrigineCountry = (e) => {
        let origineCountry = JSON.parse(e.target.value)
        values.origineCountry = origineCountry
        if (origineCountry == "États-Unis") {
            setListOrigineState(listStates)
            values.origineState = "Alabama"
        }
        if (origineCountry == "Canada") {
            setListOrigineState(listProvinces)
            values.origineState = "Alberta"
        }
        if (origineCountry == "Inconnue") {
            setListOrigineState(["Inconnue"])
            values.origineState = "Inconnue"
        }
    }

    const onChangeOrigineState = (e) => {
        let origineState = JSON.parse(e.target.value)
        values.origineState = origineState
    }

    const handleClickVaccinated = () => setVaccinated(!vaccinated)
    const handleClickCoggingTested = () => setCoggingTested(!coggingTested)

    return (
        <body id="body">
            <h2>Créer un compte cheval</h2>
            <form onSubmit={handleSubmit} className="formInscription">
                <label>
                    Nom:
                </label>
                <input id="nom" type="text" name="nom" value={values.nom} onChange={handleChange}></input>
                {errors.nom && <p className="error">{errors.nom}</p>}

                <label>
                    Numéro AQHA du Cheval:
                </label>
                <input id="aqhanumber" type="text" name="aqhanumber" value={values.aqhanumber} onChange={handleChange}></input>

                <label>
                    Nom du père du Cheval:
                </label>
                <input id="fatherName" type="text" name="fatherName" value={values.fatherName} onChange={handleChange}></input>

                <label>
                    Nom de la mère du Cheval:
                </label>
                <input id="motherName" type="text" name="motherName" value={values.motherName} onChange={handleChange}></input>

                <div className="form-inputs">
                    <label htmlFor="sexe"
                        className="form-label">
                        Sexe
                    </label>
                    <select onChange={onChangeSexe}>
                        {listSexe.map((sexe) => (
                            <option value={JSON.stringify(sexe)}>{sexe}</option>
                        ))}
                    </select>
                </div>
                {errors.sexe && <p className="error">{errors.sexe}</p>}

                <div className="form-inputs">
                    <label htmlFor="origineCountry"
                        className="form-label">
                        Pays d'origine du Cheval
                    </label>
                    <select onChange={onChangeOrigineCountry}>
                        {listCountry.map((origineCountry) => (
                            <option value={JSON.stringify(origineCountry)}>{origineCountry}</option>
                        ))}
                    </select>
                </div>

                <div className="form-inputs">
                    {values.origineCountry == "États-Unis" ?
                        <label htmlFor="origineState"
                            className="form-label">
                            État d'origine du Cheval
                        </label>
                        :
                        <label htmlFor="origineState"
                            className="form-label">
                            Province d'origine du Cheval
                        </label>
                    }
                    <select onChange={onChangeOrigineState}>
                        {listOrigineState.map((origineState) => (
                            <option value={JSON.stringify(origineState)}>{origineState}</option>
                        ))}
                    </select>
                </div>
                {errors.origineState && <p className="error">{errors.origineState}</p>}

                <div>
                    <input id="vaccinated" type="checkbox" name="vaccinated" onClick={handleClickVaccinated} value={vaccinated}></input>
                    <label>Vacciné</label>
                </div>

                <div>
                    <input id="coggingTested" type="checkbox" name="coggingTested" onClick={handleClickCoggingTested} value={coggingTested}></input>
                    <label>Testé cogging</label>
                </div>

                <label>
                    Date de naissance:
                </label>
                <input id="dateOfBirth" type="date" name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange}></input>

                <button type="submit" className="button btn btn-primary">Créer</button>
            </form >
        </body>
    )
}

export default CreateCheval
import { React, useState, useContext, useEffect } from 'react'
import { useHistory, withRouter } from "react-router-dom"
import CompetitionService from '../../../services/CompetitionService'
import { UserInfoContext } from '../../../contexts/UserInfo'
import Table from "react-bootstrap/Table"
import { Link } from 'react-router-dom'
import ReactModal from "react-modal"
import { AiOutlineClose } from "react-icons/ai"
import ClasseService from '../../../services/ClasseService'

const AfficherCompetitionOrganisation = () => {
    const history = useHistory()
    const [loggedUser] = useContext(UserInfoContext)
    const [listCompetitions, setListCompetitions] = useState([])
    const [currentClasse, setCurrentClasse] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [values, setValues] = useState({
        nbDeDivision: "",
        argentAjouter: "",
        penaliter: ""
    })
    const [errors, setErrors] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [classeType, setClasseType] = useState({})
    const [currentCompetitionId, setCurrentCompetitionId] = useState({})

    useEffect(() => {
        getCompetitions()
    }, [])

    const resetValues = () => {
        values.nbDeDivision = ""
        values.argentAjouter = ""
        values.penaliter = ""
    }

    const getCompetitions = async () => {
        let dbCompetitions = await CompetitionService.getOrganisationCompetitions(loggedUser.courriel)
        console.log(dbCompetitions, "dbCompetitions")
        setListCompetitions(dbCompetitions)
    }

    const onClickClasse = (classe, typeClasse, competitionId) => {
        console.log("CurrentClasse", classe)
        setCurrentClasse(classe)
        setClasseType(typeClasse)
        console.log("typeClasse", typeClasse)
        setCurrentCompetitionId(competitionId)
        console.log("CurrentCompetitionId", competitionId)

        setShowModal(true)
    }

    const onClickClose = () => {
        setCurrentClasse({})
        setShowModal(false)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    function checkError(values) {
        let errors = {}
        if (!values.nbDeDivision) {
            errors.nbDeDivision = "Le nombre de division est requis"
        }

        if (!values.argentAjouter) {
            errors.argentAjouter = "La valeur d'argent ajouté est requise"
        }

        if (!values.penaliter) {
            errors.penaliter = "Le temp de pénalité est requis"
        }

        return errors

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values, "Classe Values: ")
        setErrors(checkError(values))

        setSubmitted(true)
        if (Object.keys(checkError(values)).length === 0 || Object.keys(checkError(values)).length === undefined && submitted) {

            if (classeType == "AllerRetour") {
                await ClasseService.saveAllerRetour(values, currentCompetitionId)
            } else if (classeType == "Baril") {
                await ClasseService.saveBaril(values, currentCompetitionId)
            } else if (classeType == "Tour") {
                await ClasseService.saveTour(values, currentCompetitionId)
            }
            getCompetitions()
            resetValues()
            setShowModal(false)
            history.push("/afficherCompetitionOrganisation")

        }
    }

    const competitionList = listCompetitions.map((competition) =>
        <tr key={competition.id.toString()}>
            <td>{competition.nom}</td>
            <td>{competition.date}</td>
            <td>{competition.adresse}</td>
            <td>
                <input
                    type="button"
                    onClick={() => onClickClasse(competition.allerRetour, "AllerRetour", competition.id)}
                    value="Voir/créer classe"
                    className="p-1 btn-secondary"
                />
            </td>
            <td>
                <input
                    type="button"
                    onClick={() => onClickClasse(competition.baril, "Baril", competition.id)}
                    value="Voir/créer classe"
                    className="p-1 btn-secondary"
                />
            </td>
            <td>
                <input
                    type="button"
                    onClick={() => onClickClasse(competition.tour, "Tour", competition.id)}
                    value="Voir/créer classe"
                    className="p-1 btn-secondary"
                />
            </td>
        </tr>)

    return (
        <body id="body">
            <div>
                {listCompetitions.length > 0 ?
                    <div>
                        <h2>Mes compétitions</h2>
                        <Table striped bordered hover variant="dark" id="tableCv">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Date</th>
                                    <th>Addresse</th>
                                    <th>Aller retour</th>
                                    <th>Course de barils</th>
                                    <th>Tour de ring</th>
                                </tr>
                            </thead>
                            <tbody>{competitionList}</tbody>
                        </Table>
                        <ReactModal
                            isOpen={showModal}
                            ariaHideApp={false}
                            style={{
                                overlay: {
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(100, 100, 100, 0.75)",
                                },
                                content: {
                                    position: "absolute",
                                    top: "40px",
                                    left: "40px",
                                    right: "40px",
                                    bottom: "40px",
                                    border: "1px solid #ccc",
                                    background: "rgb(69, 69, 69)",
                                    overflow: "auto",
                                    WebkitOverflowScrolling: "touch",
                                    borderRadius: "4px",
                                    outline: "none",
                                    padding: "20px",
                                },
                            }}
                        >
                            <div className="container text-center">
                                <AiOutlineClose
                                    color="red"
                                    size="24px"
                                    onClick={onClickClose}
                                    className="align-right"
                                />
                                {currentClasse != null ?
                                    <div className="row mt-4">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="bg-muted text-white">Nombre de division</th>
                                                    <td className="bg-secondary">
                                                        {currentClasse.nbDeDivision}D
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="bg-muted text-white">Argent ajouté</th>
                                                    <td className="bg-secondary">
                                                        {currentClasse.argentAjouter}$
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="bg-muted text-white">Pénalité</th>
                                                    <td className="bg-secondary">
                                                        {currentClasse.penaliter}s
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="bg-muted text-white">Nombre d'inscription</th>
                                                    <td className="bg-secondary">
                                                        {null}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    <form onSubmit={handleSubmit} className="formInscription">

                                        <label>
                                            Nombre de division:
                                        </label>
                                        <input id="nbDeDivision" type="number" name="nbDeDivision" value={values.nbDeDivision} onChange={handleChange}></input>
                                        {errors.nbDeDivision && <p className="error">{errors.nbDeDivision}</p>}

                                        <label>
                                            Argent ajouté:
                                        </label>
                                        <input id="argentAjouter" type="number" name="argentAjouter" value={values.argentAjouter} onChange={handleChange}></input>
                                        {errors.argentAjouter && <p className="error">{errors.argentAjouter}</p>}

                                        <label>
                                            Pénalité:
                                        </label>
                                        <input id="penaliter" type="number" name="penaliter" value={values.penaliter} onChange={handleChange}></input>
                                        {errors.penaliter && <p className="error">{errors.penaliter}</p>}

                                        <button type="submit" className="button btn btn-primary">Créer classe</button>
                                    </form >
                                }

                            </div>
                        </ReactModal>
                    </div>
                    :
                    <h5 style={{ textAlign: "center", color: "yellow" }}>Créer une compétition <Link to="/createCompetition" style={{ color: "white", textDecoration: "underline" }}>ici</Link></h5>
                }
            </div>
        </body>
    )
}

export default AfficherCompetitionOrganisation
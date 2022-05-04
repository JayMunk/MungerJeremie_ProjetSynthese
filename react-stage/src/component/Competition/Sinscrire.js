import { React, useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import CompetitionService from '../../services/CompetitionService'
import { UserInfoContext } from '../../contexts/UserInfo'
import Table from "react-bootstrap/Table"
import { Link } from 'react-router-dom'
import ReactModal from "react-modal"
import { AiOutlineClose } from "react-icons/ai"
import ClasseService from '../../services/ClasseService'
import ChevalService from '../../services/ChevalService'

const Sinscrire = () => {
    const history = useHistory()
    const [loggedUser] = useContext(UserInfoContext)
    const [listCompetitions, setListCompetitions] = useState([])
    const [currentClasse, setCurrentClasse] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [classeType, setClasseType] = useState({})
    const [listHorses, setListHorses] = useState([])
    const [horseId, setHorseId] = useState({})

    useEffect(() => {
        const getHorses = async () => {
            let dbHorses = await ChevalService.getHorsesByOwnerEmail(loggedUser.courriel)
            setHorseId(dbHorses[0].id)
            setListHorses(dbHorses)
        }
        getHorses()
        getCompetitions()
    }, [])

    const getCompetitions = async () => {
        var today = new Date()
        var dateDebut = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate()
        let dbCompetitions = await CompetitionService.getCompetitionsByDateYear(dateDebut)
        setListCompetitions(dbCompetitions)
    }

    const onClickClasse = (classe, typeClasse, competitionId) => {
        setCurrentClasse(classe)
        setClasseType(typeClasse)

        setShowModal(true)
    }

    const onClickClose = () => {
        setCurrentClasse({})
        setShowModal(false)
    }

    const onChangeHorse = (e) => {
        let horse = JSON.parse(e.target.value)
        setHorseId(horse.id)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (classeType == "AllerRetour") {
            await ClasseService.sinscrireAllerRetour(horseId, loggedUser.courriel, currentClasse.id)
        } else if (classeType == "Baril") {
            await ClasseService.sinscrireBaril(horseId, loggedUser.courriel, currentClasse.id)
        } else if (classeType == "Tour") {
            await ClasseService.sinscrireTour(horseId, loggedUser.courriel, currentClasse.id)
        }
        getCompetitions()
        setShowModal(false)
        history.push("/")
    }

    const competitionList = listCompetitions.map((competition) =>
        <tr key={competition.id.toString()}>
            <td>{competition.nom}</td>
            <td>{competition.date}</td>
            <td>{competition.adresse}</td>
            <td>
                {competition.allerRetour != null ?
                    <input
                        type="button"
                        onClick={() => onClickClasse(competition.allerRetour, "AllerRetour", competition.id)}
                        value="S'inscrire"
                        className="p-1 btn-secondary"
                    /> :
                    null
                }
            </td>
            <td>
                {competition.baril != null ?
                    <input
                        type="button"
                        onClick={() => onClickClasse(competition.baril, "Baril", competition.id)}
                        value="S'inscrire"
                        className="p-1 btn-secondary"
                    /> :
                    null
                }
            </td>
            <td>
                {competition.tour != null ?
                    <input
                        type="button"
                        onClick={() => onClickClasse(competition.tour, "Tour", competition.id)}
                        value="S'inscrire"
                        className="p-1 btn-secondary"
                    />
                    :
                    null
                }
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

                                <form onSubmit={handleSubmit} className="formInscription">

                                    <label>
                                        Choisir cheval:
                                    </label>
                                    <select onChange={onChangeHorse}>
                                        {listHorses.map((cheval) => (
                                            <option value={JSON.stringify(cheval)}>{cheval.nom}</option>
                                        ))}
                                    </select>

                                    <button type="submit" className="button btn btn-primary">S'inscrire</button>
                                </form >


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

export default Sinscrire
import { React, useState, useContext, useEffect } from 'react'
import { UserInfoContext } from '../contexts/UserInfo'
import ChevalService from '../services/ChevalService'
import Table from "react-bootstrap/Table"
import { Link } from 'react-router-dom'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import ReactModal from "react-modal"
import { AiOutlineClose } from "react-icons/ai"

const MyHorses = () => {
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    const [listHorses, setListHorses] = useState([])
    const [currentHorse, setCurrentHorse] = useState({})
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const getHorses = async () => {
            let dbHorses = await ChevalService.getHorsesByOwnerEmail(loggedUser.courriel)
            console.log(dbHorses, "dbHorses")
            setListHorses(dbHorses)
        }
        getHorses()
    }, [])

    const getBoolIcon = (bool) => {
        return bool ? (
            <AiOutlineCheckCircle color="green" />
        ) : (
            <AiOutlineCloseCircle color="red" />
        )
    }

    const onClickHorse = (horse) => {
        console.log("Currenthorse", horse)
        setCurrentHorse(horse)
        setShowModal(true)
    }

    const onClickClose = () => {
        setCurrentHorse({})
        setShowModal(false)
    }

    const horsesList = listHorses.map((horse) =>
        <tr key={horse.id.toString()}>
            <td>{horse.nom}</td>
            <td>{getBoolIcon(horse.vaccinated)}</td>
            <td>{getBoolIcon(horse.coggingTested)}</td>
            <td>
                <input
                    type="button"
                    onClick={() => onClickHorse(horse)}
                    value="Voir détail"
                    className="p-1 btn-secondary"
                />
            </td>
        </tr>)


    return (
        <body id="body">
            <div>
                {listHorses.length > 0 ?
                    <div>
                        <h2>Mes chevaux</h2>
                        <Table striped bordered hover variant="dark" id="tableCv">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Vacciné</th>
                                    <th>Cogging valide</th>
                                    <th>Détail</th>
                                </tr>
                            </thead>
                            <tbody>{horsesList}</tbody>
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
                                                <th className="bg-muted text-white">Nom</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.nom}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">fatherName</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.fatherName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">motherName</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.motherName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">sexe</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.sexe}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">dateOfBirth</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.dateOfBirth}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">origineState</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.origineState}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">origineCountry</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.origineCountry}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">aqhanumber</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.aqhanumber}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="bg-muted text-white">gain</th>
                                                <td className="bg-secondary">
                                                    {currentHorse.gain}$
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </ReactModal>
                    </div>
                    :
                    <h5 style={{ textAlign: "center", color: "yellow" }}>Créer une cheval <Link to="/createcheval" style={{ color: "white", textDecoration: "underline" }}>ici</Link></h5>
                }
            </div>
        </body>
    )
}

export default MyHorses
import { React, useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import CompetitionService from '../../../services/CompetitionService'
import { UserInfoContext } from '../../../contexts/UserInfo'
import Table from "react-bootstrap/Table"
import { Link } from 'react-router-dom'

const AfficherCompetition = () => {
    const [loggedUser] = useContext(UserInfoContext)
    const [listCompetitions, setListCompetitions] = useState([])

    useEffect(() => {
        const getCompetitions = async () => {
            let dbCompetitions = await CompetitionService.getOrganisationCompetitions(loggedUser.courriel)
            console.log(dbCompetitions, "dbCompetitions")
            setListCompetitions(dbCompetitions)
        }
        getCompetitions()
    }, [])

    const competitionList = listCompetitions.map((competition) =>
        <tr key={competition.id.toString()}>
            <td>{competition.nom}</td>
            <td>{competition.date}</td>
            <td>{competition.adresse}</td>
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
                                </tr>
                            </thead>
                            <tbody>{competitionList}</tbody>
                        </Table>
                    </div>
                    :
                    <h5 style={{ textAlign: "center", color: "yellow" }}>Créer une compétition <Link to="/createCompetition" style={{ color: "white", textDecoration: "underline" }}>ici</Link></h5>
                }
            </div>
        </body>
    )
}

export default AfficherCompetition
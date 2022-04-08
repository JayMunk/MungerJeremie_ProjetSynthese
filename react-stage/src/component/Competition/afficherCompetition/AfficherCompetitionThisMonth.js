import { React, useState, useEffect } from 'react'
import CompetitionService from '../../../services/CompetitionService'
import Table from "react-bootstrap/Table"

const AfficherCompetitionThisMonth = () => {
    const [listCompetitions, setListCompetitions] = useState([])

    useEffect(() => {
        const getCompetitions = async () => {
            var today = new Date()
            var dateDebut = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate() + 1)).slice(-2)
            console.log(dateDebut, "date")
            let dbCompetitions = await CompetitionService.getCompetitionsByDateMonth(dateDebut)
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
            <td>{competition.organisation.nom}</td>
        </tr>)

    return (
        <body id="body">
            <div>
                {listCompetitions.length > 0 ?
                    <div>
                        <Table striped bordered hover variant="dark" id="tableCv">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Date</th>
                                    <th>Addresse</th>
                                    <th>Organisation</th>
                                </tr>
                            </thead>
                            <tbody>{competitionList}</tbody>
                        </Table>
                    </div>
                    :
                    <h5> Aucune compétition au courant des 30 prochains jours</h5>
                }
            </div>
        </body>
    )
}

export default AfficherCompetitionThisMonth
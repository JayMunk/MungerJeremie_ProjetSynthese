import { React, useState, useContext, useEffect } from 'react'
import { useHistory, withRouter } from "react-router-dom"
import CompetitionService from '../../../services/CompetitionService'
import { UserInfoContext } from '../../../contexts/UserInfo'
import Table from "react-bootstrap/Table"
import { Link } from 'react-router-dom'

const AfficherCompetitionThisMonth = () => {
    const history = useHistory()
    const [loggedUser] = useContext(UserInfoContext)
    const [listCompetitions, setListCompetitions] = useState([])

    useEffect(() => {
        const getCompetitions = async () => {
            var today = new Date()
            var dateDebut = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate()
            console.log(dateDebut, "date")
            let dbCompetitions = await CompetitionService.getCompetitionsByDateMonth(dateDebut)
            console.log(dbCompetitions, "dbCompetitions")
            setListCompetitions(dbCompetitions)
        }
        getCompetitions()
    }, [])

    const inscrire = (competition) => {
        //this.props.history.push({ pathname: "/voirClasses",  state:competition })
        //props.history.push({ pathname: '/details', state })
    }

    const competitionList = listCompetitions.map((competition) =>
        <tr key={competition.id.toString()}>
            <td>{competition.nom}</td>
            <td>{competition.date}</td>
            <td>{competition.adresse}</td>
            <td><button onClick={() => inscrire(competition)} >s'inscrire</button></td>
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
                                    <th>Inscription</th>
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
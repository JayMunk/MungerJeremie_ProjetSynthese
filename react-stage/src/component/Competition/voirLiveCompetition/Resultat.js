import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'


const Resultat = (props) => {
    const [resultatListParticipant, setResultatListParticipant] = useState([props.listParticipant])
    const [resultatListCheval, setResultatListCheval] = useState([props.listCheval])
    const [resultatListTemps, setResultatListTemps] = useState([props.listTemps])

    useEffect(() => {
        console.log(props.listParticipant, "props.listParticipant")
        console.log(props.listCheval, "props.listCheval")
        setResultatListParticipant(props.listParticipant)
        setResultatListCheval(props.listCheval)
        setResultatListTemps(props.listTemps)
    }, [])

    const resultatListTable = resultatListParticipant.map((inscription, idx) =>
        <tr key={resultatListParticipant.id}>
            <td>{idx + 1}</td>
            <td>{resultatListParticipant[idx].prenom} {resultatListParticipant[idx].nom}</td>
            <td>{resultatListCheval[idx].nom}</td>
            <td>{resultatListTemps[idx]}</td>
        </tr>
    )

    return (
        <div>
            <h2>Résultat</h2>
            <Table striped bordered hover variant="dark" id="tableCv">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Nom participant</th>
                        <th>Nom cheval</th>
                        <th>Temps</th>
                    </tr>
                </thead>
                <tbody>
                    {resultatListTable}
                </tbody>
            </Table>
        </div>
    )
}

export default Resultat
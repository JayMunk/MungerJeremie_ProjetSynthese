import { React, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

const OrdreDePassage = (props) => {
    const [ordreList, setOrdreList] = useState([])
    const [ordreListParticipant, setOrdreListParticipant] = useState([])
    const [ordreListCheval, setOrdreListCheval] = useState([props.listCheval])

    useEffect(() => {
        console.log(props.listParticipant, "props.ordreListParticipant")
        console.log(props.listCheval, "props.ordreListCheval")
        setOrdreListParticipant(props.listParticipant)
        setOrdreListCheval(props.listCheval)
    }, [])

    const ordreListTable = props.listParticipant.map((inscription, idx) =>
        <tr key={props.listParticipant.id}>
            <td>{idx + 1}</td>
            <td>{props.listParticipant[idx].prenom} {props.listParticipant[idx].nom}</td>
            <td>props.listCheval[idx].nom</td>
        </tr>
    )

    return (
        <div>
            <h2>Ordre de passage</h2>
            <Table striped bordered hover variant="dark" id="tableCv">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom participant</th>
                        <th>Nom cheval</th>
                    </tr>
                </thead>
                <tbody>
                    {ordreListTable}
                </tbody>
            </Table>
        </div>
    )
}

export default OrdreDePassage
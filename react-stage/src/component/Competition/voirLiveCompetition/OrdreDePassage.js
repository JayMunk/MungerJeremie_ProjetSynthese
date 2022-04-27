import { React, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

const OrdreDePassage = (props) => {
    const [ordreList, setOrdreList] = useState([])
    const [ordreListParticipant, setOrdreListParticipant] = useState([props.listParticipant])
    const [ordreListCheval, setOrdreListCheval] = useState([props.listCheval])

    useEffect(() => {
        console.log(props.listParticipant, "props.listParticipant")
        console.log(props.listCheval, "props.listCheval")
        setOrdreListParticipant(props.listParticipant)
        setOrdreListCheval(props.listCheval)
    }, [])

    const ordreListTable = ordreListParticipant.map((inscription, idx) =>
        <tr key={ordreListParticipant.id}>
            <td>{idx + 1}</td>
            <td>{ordreListParticipant[idx].prenom} {ordreListParticipant[idx].nom}</td>
            <td>{ordreListCheval[idx].nom}</td>
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
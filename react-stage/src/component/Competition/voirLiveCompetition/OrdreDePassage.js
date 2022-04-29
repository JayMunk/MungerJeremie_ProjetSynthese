import { React, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

const OrdreDePassage = (props) => {
    const [ordreList, setOrdreList] = useState([])

    useEffect(() => {
        console.log(props.ordreList, "props.ordreList")
        setOrdreList(props.ordreList)
    }, [])

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
                    {ordreList.map((equipe, idx) =>
                        <tr key={equipe.id}>
                            <td>{idx + 1}</td>
                            <td>{equipe.prenom} {equipe.nom}</td>
                            <td>{equipe.nomCheval}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default OrdreDePassage
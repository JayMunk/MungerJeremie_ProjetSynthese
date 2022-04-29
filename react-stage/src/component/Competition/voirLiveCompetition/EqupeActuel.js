import React from 'react'
import Table from 'react-bootstrap/Table'

const EqupeActuel = (props) => {
    return (
        <div>
            <h2>Tour actuel</h2>
            <Table striped bordered hover variant="dark" id="tableCv">
                <thead>
                    <tr>
                        <th>Nom participant</th>
                        <th>Nom cheval</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.equipe.prenom} {props.equipe.nom}</td>
                        <td>{props.equipe.nomCheval}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default EqupeActuel
import React from 'react'
import Table from 'react-bootstrap/Table'


const Resultat = () => {
    return (
        <div>
            <h2>Résultat</h2>
            <Table striped bordered hover variant="dark" id="tableCv">
                <thead>
                    <tr>
                        <th>Nom participant</th>
                        <th>Nom cheval</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>prenom nom</td>
                        <td>nomCheval</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Resultat
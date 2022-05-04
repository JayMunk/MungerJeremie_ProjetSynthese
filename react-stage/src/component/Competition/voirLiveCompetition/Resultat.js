import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

const Resultat = (props) => {
    const [resultatList, setResultatList] = useState([])
    useEffect(() => {
        setResultatList(props.resultatList)
    }, [])

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
                    {resultatList.map((equipe, idx) =>
                        <tr key={equipe.id}>
                            <td>{idx + 1}</td>
                            <td>{equipe.prenom} {equipe.nom}</td>
                            <td>{equipe.nomCheval}</td>
                            <td>{equipe.temps}s</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Resultat
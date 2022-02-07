import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
    return (
        <body id="body">
            <h2>Créer un compte</h2>
            <Link class="link-primary" to="/createOrganisation">createOrganisation</Link>
            <Link class="link-primary" to="/createParticipant">createParticipant</Link>
        </body>
    );
}

export default CreateAccount
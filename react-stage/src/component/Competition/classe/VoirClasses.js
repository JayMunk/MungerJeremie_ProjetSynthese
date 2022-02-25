import { React, useState, useContext, Component } from 'react'
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom"
import { useEffect } from 'react'
import { UserInfoContext } from '../../../contexts/UserInfo'

const VoirClasses = (state) => {
    const history = useHistory();
    const [competition, setCompetition] = useState({})
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    const [values, setValues] = useState({
        nom: "",
        date: "",
        adresse: ""
    })

    useEffect(() => {
        const getClasses = async () => {
            //let dbClasses = await ClasseService.getClassesOfCompetitions(loggedUser.courriel)
            // console.log(dbClasses, "dbClasses")
            //setListClasses(dbClasses)
        }
        console.log("allo")
        console.log(state, "state")
        //console.log(props, "props")
        // getClasses()
    }, [])



    return (
        <body id="body">
            <p>voirClasses</p>
        </body>
    );
}

export default VoirClasses
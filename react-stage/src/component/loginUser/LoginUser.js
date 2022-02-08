import { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { UserInfoContext } from "../../contexts/UserInfo";
import { Link } from 'react-router-dom';



const LoginUser = () => {

    const history = useHistory();
    const [values, setValues] = useState({

        courriel: "",
        password: "",

    })


    const firstUpdate = useRef(true)
    const loginValid = useRef(false)
    const [loggedUser, setLoggedUser] = useContext(UserInfoContext)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleChange = e => {


        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    function checkError(values) {
        let errors = {}
        if (!values.courriel) {
            errors.courriel = "Courriel requis"
        }

        if (!values.password) {
            errors.password = "Mot de passe requis"
        }

        return errors

    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(checkError(values))

        setIsSubmitted(true)
    }
    useEffect(() => {
        console.log(errors, "errors")
    }, [errors]
    )

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        } else {
            if (Object.keys(errors).length === 0 && isSubmitted) {
                fetch(`http://localhost:9191/user/${values.courriel}/${values.password}`)
                    .then(res => {
                        console.log(res, "resultat res")

                        if (res.ok) {
                            loginValid.current = true
                            return res.json()
                        }
                        throw res

                    })
                    .then(data => {

                        if (loginValid.current) {


                            setLoggedUser({
                                courriel: data.courriel,
                                isLoggedIn: true
                            })
                            history.push("/home");
                        }
                    })
                    .catch(error => {
                        alert('Votre courriel ou votre mot de passe est invalide.')
                    })

            }
        }
    }, [errors]
    );

    useEffect(() => {
        if (loggedUser.isLoggedIn) {
            console.log(loggedUser)
        }

    }, [loggedUser])



    return (
        <body id="body" className="mx-auto">
            <ul className="lienInscription">
                <li><Link to="/createOrganisation">Créer un compte d'organisation</Link></li>
                <li><Link to="/createParticipant">Créer un compte participant</Link></li>
            </ul>

            <h2>Vous pouvez vous connecter ici</h2>
            <form onSubmit={handleSubmit} id="formLogin" className="formInscription">

                <label>
                    Courriel:
                </label>
                <input id="courriel" type="email" name="courriel" value={values.email} onChange={handleChange}></input>
                {errors.courriel && <p className="error">{errors.courriel}</p>}

                <label>
                    Mot de passe:
                </label>
                <input id="password" type="password" name="password" value={values.password} onChange={handleChange}></input>
                {errors.password && <p className="error">{errors.password}</p>}



                <button type="submit" className="button">Se connecter</button>
            </form >
        </body>
    );
}

export default LoginUser

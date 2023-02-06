import React from 'react';
import {Link} from 'react-router-dom';
import axios from '../../api/axios';
import './Form.css';
import blooming from '../../assets/img/blooming.svg';

const userRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex=/^[a-zA-Z0-9!@#$%]{8}/;
const REGISTER_URL = '/register';

const Register = () => {

    const userRef = React.useRef();
    const passwordRef = React.useRef();

    const [user, setUser] = React.useState("");
    const [validUser, setValidUser] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [validPassword, setValidPassword] = React.useState(false);

    const [msg, setMsg] = React.useState("");

    React.useEffect(() => {
        setValidUser(userRegex.test(user));
    }, [user]);

    React.useEffect(() => {
        setValidPassword(passwordRegex.test(password));
    }, [password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const checkedUser = userRegex.test(user);
        const checkedPassword = passwordRegex.test(password);

        if(!checkedUser || !checkedPassword) {
            setMsg("Inputs are required");
            return
        }
        
        try {
            await axios.post(REGISTER_URL,
                JSON.stringify({
                    "email": user,
                    "password": password
                }),
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
        
            setMsg("successfully signed up!")

        } catch(err) {
            if(!err?.response) {
                setMsg("Unknown Error")
            } else if (err.response?.status === 409) {
                setMsg("user already exists")
            }

            setTimeout(() => {
                passwordRef.current.value = "";
                userRef.current.value = "";
                setValidUser("");
                setValidPassword("");
                setMsg("")
            },1000)
        }

        

    }

    return (
        <div className="FormComponent">
            <h1 className="form__title">Register</h1>
            <form className="form__form" onSubmit={handleSubmit}>
                <p className="form__error-msg">{msg}</p>
                <div className="form__input-wrapper">
                    <input
                        ref={userRef}
                        onInput={(e) => setUser(e.target.value)}
                        className="form__input"
                        autoComplete="off"
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        aria-label="Email"
                        aria-invalid={validUser? "true" : "false"}
                        required
                    ></input>
                </div>
                <div className="form__input-wrapper">
                    <input
                        ref={passwordRef}
                        onInput={(e) => setPassword(e.target.value)}
                        className="form__input"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        aria-label="Password"
                        aria-invalid={validPassword? "true" : "false"}
                        aria-describedby="password-suggestion"
                        required
                    ></input>
                    <p id="password-suggestion" className="form__suggestion">*Must be at least 8 characters</p>
                </div>
                <button 
                    className="form__submit-btn"
                    disabled={!validUser || !validPassword? true : false}
                >
                Register
                </button>
            </form>

            
            <Link to="login" className="form__redirect-link">Have an account? Sign in</Link>
            
            <img className="form__image" src={blooming} alt="mindfulness"/>
        </div>
    )
}

export default Register
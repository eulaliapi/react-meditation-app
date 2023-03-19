import {useNavigate, useLocation} from 'react-router-dom';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import './Footer.css';
import {FaGithub} from 'react-icons/fa';

const LOGOUT_URL = '/logout';

const Footer = () => {
    const authHook = useAuth(); 

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const accessToken = authHook.auth.accessToken["access_token"];
       try {
        await axios.get(LOGOUT_URL, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                },
                withCredentials: true,
            }
        );

        navigate("/");
       } catch (err) {
            console.log(err);
       }

    }

    return (
        <footer className="Footer">
            {
            location.pathname === "/main" &&
                <div className="footer__item">
                    <p className="footer__redirect-link" onClick={() => handleLogout()}>Logout</p>
                </div>
            }
            {
            (location.pathname === "/" || location.pathname === "/login") &&
                <div className="footer__item">
                    <a className="footer__redirect-link credits" href="https://eulaliapi.github.io/" target={"_blank"} rel="noreferrer">Eulalia Pirone</a>
                    <a className="footer__redirect-link credits" href="https://github.com/eulaliapi" target={"_blank"} rel="noreferrer"><FaGithub/></a>
                </div>
            }
            
        </footer>
    )
}

export default Footer
import {useNavigate, useLocation} from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from '../../api/axios';
import './Footer.css';
import {FaGithub} from 'react-icons/fa';

const LOGOUT_URL = '/logout';

const Footer = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        
       try {

        const ACCESS_TOKEN = Cookies.get('access-token');

        await axios.get(LOGOUT_URL, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + ACCESS_TOKEN,
                },
                withCredentials: true,
            }
        );

        Cookies.remove('access-token');
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
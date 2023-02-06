import {Link} from 'react-router-dom';
import './Error.css';
import pageNotFound from "../../assets/img/not-found.svg";

const Error = () => {
    return(
        <div className="Error">
            <img className="error__img"src={pageNotFound} alt="404 not found"/>
            <Link to="/" className="error__btn">Home</Link>
        </div>
    )
}

export default Error
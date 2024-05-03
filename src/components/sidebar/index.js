import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logoz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = ()=>{
    return(
<div className="nav-bar">
    <Link className="logo" to="/">
<img src={Logo} alt="logo"/>
<p className="sub-logo" style={{color:'white',textAlign:'center',textDecorationColor: 'black' }}>Zia-Ur-Rehman</p>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
<FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
<FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/zia-ur-rehman-jsdev/'>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
        </li>
    </ul>
</div>
    );
}
export default Sidebar
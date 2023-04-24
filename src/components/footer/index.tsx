import { NavLink } from 'react-router-dom';
import { BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';

import './footer.scss';
import { socialLinks } from '../navbar/navData';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <ul className='footer-links'>
                <li key={socialLinks[0].title}>
                    <NavLink className='footer-link' to={socialLinks[0].path} target="_blank" rel="noopener noreferrer"><BsInstagram/></NavLink>
                </li>
                <li key={socialLinks[1].title}>
                    <NavLink className='footer-link' to={socialLinks[1].path} target="_blank" rel="noopener noreferrer"><BsYoutube/></NavLink>
                </li>
                <li key={socialLinks[2].title}>
                    <NavLink className='footer-link' to={socialLinks[2].path} target="_blank" rel="noopener noreferrer"><BsTwitter/></NavLink>
                </li>
            </ul>
            <p className='footer-text'>Kreative's Lobby &copy; {year} | All rights reserved.</p>
        </footer>
    )
};

export default Footer;
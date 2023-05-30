import { NavLink } from 'react-router-dom';
import { BsInstagram, BsYoutube, BsTwitter, BsFillTelephoneOutboundFill, } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import './footer.scss';
import { socialLinks } from '../navbar/navData';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <ul className='footer-links'>
                <li>
                    <a className='footer-link' href="tel: +234 708 344 4777"><BsFillTelephoneOutboundFill/></a>
                </li>
                <li>
                    <a className='footer-link' href="mailto: contact@kreativeslobby.com"><MdEmail/></a>
                </li>
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
            <p className='footer-text'>Kreatives Lobby &copy; {year} | All rights reserved.</p>
        </footer>
    )
};

export default Footer;
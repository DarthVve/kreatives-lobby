import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

import './navbar.scss';
import { AppLogo } from '../../assets/images';
import { navLinks, socialLinks } from './navData';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <header>
            <nav className='navbar'>
                <img className='logo' src={AppLogo } alt="Kreative's Lobby Logo" />
                <div className='nav'>
                    <ul className='nav-links'>
                        {navLinks.map((link, index) => { 
                            return (
                                <li key={index}>
                                    <NavLink className={activeTab === index ? 'nav-link-active' : 'nav-link'} to={link.path} onClick={() => setActiveTab(index)}>{link.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='social-links'>
                        <li key={socialLinks[0].title}>
                            <NavLink className='social-link' to={socialLinks[0].path} target="_blank" rel="noopener noreferrer"><BsInstagram/></NavLink>
                        </li>
                        <li key={socialLinks[1].title}>
                            <NavLink className='social-link' to={socialLinks[1].path} target="_blank" rel="noopener noreferrer"><BsYoutube/></NavLink>
                        </li>
                        <li key={socialLinks[2].title}>
                            <NavLink className='social-link' to={socialLinks[2].path} target="_blank" rel="noopener noreferrer"><BsTwitter/></NavLink>
                        </li>
                    </ul>
                    <NavLink to='https://linktr.ee/kreatives_lobby' target="_blank" rel="noopener noreferrer"><button className='nav-btn'>Get Started</button></NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;
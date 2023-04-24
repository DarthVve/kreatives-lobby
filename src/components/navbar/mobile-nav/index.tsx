import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';

import './mobileNav.scss';
import { AppLogo } from '../../../assets/images';
import { navLinks, socialLinks } from '../navData';

const MobileNav = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const linkAction = (index: number) => { 
        return () => {
            setActiveTab(index);
            setShow(!show);
        }
    };


    return (
    <header>
        <nav className='mobile-nav'>
            <img className='logo-m' src={AppLogo} alt="Kreative's Lobby Logo" />
            <div onClick={() => setShow(!show)}>
                {show ? <GiCancel color='#fffcf0' size={35} /> : <GiHamburgerMenu color='#f8982c' size={35} />}
            </div>
        </nav>
        {show && (<div className='nav-menu'>
            <ul className='nav-links-m'>
                {navLinks.map((link, index) => { 
                    return (
                        <li key={index}>
                            <NavLink className={activeTab === index ? 'nav-link-active' : 'nav-link'} to={link.path} onClick={linkAction(index)}>{link.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <ul className='social-links-m'>
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
            <NavLink to='https://linktr.ee/kreatives_lobby' target="_blank" rel="noopener noreferrer"><button className='nav-btn-m'>Get Started</button></NavLink>
        </div>)}
    </header>
    )
};

export default MobileNav;
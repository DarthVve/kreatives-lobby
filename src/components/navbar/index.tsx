import { AppLogo } from '../../assets/images';
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img className='logo' src={AppLogo } alt="Kreative's Lobby Logo" />
                <ul className='nav-links'></ul>
            </nav>
        </>
    )
};

export default Navbar;
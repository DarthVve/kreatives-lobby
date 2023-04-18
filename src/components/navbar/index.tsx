import { AppLogo } from '../../assets/images';
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img src={AppLogo } alt="Kreative's Lobby Logo" />
                <ul></ul>
            </nav>
        </>
    )
};

export default Navbar;
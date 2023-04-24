import { Routes, Route } from 'react-router-dom';

import './layout.scss'
import BaseRoute from "../routes/BaseRoute";
import { Footer, Navbar, MobileNav } from '../components';

const Layout = () => { 
    return (
        <div className='layout'>
            <Navbar />
            <MobileNav />
            <Routes>
                <Route path='/*' element={<BaseRoute/>} />
            </Routes>
            <Footer/>
        </div>
    )
};

export default Layout;
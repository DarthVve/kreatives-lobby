import './home.scss';
import { HomeVideo, Partners, About, WhatWeDo } from '../../components';

const Home = () => {
    return (
        <section className='home'>
            <HomeVideo />
            <Partners />
            <About />
            <WhatWeDo />
        </section>
    )
};

export default Home;

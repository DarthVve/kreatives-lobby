import './home.scss';
import { HomeVideo, Partners, About, WhatWeDo, HowWeMakeIt } from '../../components';

const Home = () => {
    return (
        <section className='home'>
            <HomeVideo/>
            <Partners/>
            <About/>
            <WhatWeDo/>
            <HowWeMakeIt/>
        </section>
    )
};

export default Home;

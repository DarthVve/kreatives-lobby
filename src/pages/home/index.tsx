import './home.scss';
import { HomeVideo, Partners, About, WhatWeDo, HowWeMakeIt, ContactAd } from '../../components';

const Home = () => {
    return (
        <section className='home'>
            <HomeVideo/>
            <Partners/>
            <About/>
            <WhatWeDo/>
            <HowWeMakeIt />
            <ContactAd/>
        </section>
    )
};

export default Home;

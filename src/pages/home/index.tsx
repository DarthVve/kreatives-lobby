import React, { Suspense } from 'react';

import { Loader } from '../../components';

const HomeVideo = React.lazy(() => import('../../components/homeVideo'));
const Partners = React.lazy(() => import('../../components/partners'));
const About = React.lazy(() => import('../../components/about'));
const WhatWeDo = React.lazy(() => import('../../components/what'));
const HowWeMakeIt = React.lazy(() => import('../../components/how'));
const Team = React.lazy(() => import('../../components/team'));
const ContactAd = React.lazy(() => import('../../components/contactAd'));

const Home = () => {
    return (
        <section className='home'>
            <Suspense fallback={<Loader />}>
                <HomeVideo/>
                <Partners/>
                <About/>
                <WhatWeDo/>
                <HowWeMakeIt />
                <Team/>
                <ContactAd/>
            </Suspense>
        </section>
    )
};

export default Home;

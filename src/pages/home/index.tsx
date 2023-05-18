import './home.scss';
import { HomeVideo, Partners, About } from '../../components';

const Home = () => {
    return (
        <section className='home'>
            <HomeVideo />
            <Partners />
            <About />
        </section>
    )
};

export default Home;

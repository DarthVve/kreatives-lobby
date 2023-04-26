import './home.scss';
import { HomeText, HomeVideo } from '../../components';

const Home = () => {
    return (
        <section className='home'>
            <HomeVideo />
            <HomeText />
        </section>
    )
};

export default Home;

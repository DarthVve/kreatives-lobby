import './homeVid.scss';
import { introVideo } from '../../assets/videos';

const HomeVideo = () => {
    return (
        <div  className='home-vid'>
            <div className='hv-text'>
                <p className='hv-text1'>The</p>
                <p className='hv-text2'>Kreatives Lobby</p>
                <p className='hv-text2' style={{fontSize: '3rem'}}>Initiative</p>
                <p className='hv-text3'>A Non-profit driving change through art.</p>
                <div style={{paddingBottom: '1rem'}}>
                    <q className='hv-text3'>
                    <i style={{fontWeight: 400}}>
                        Art is the language of the heart.
                    </i>
                </q>  
                <span className='hv-text1'> - Marc Chagall</span>
                </div>
                <p className='hv-text3'>At Kreatives Lobby, we are telling stories and building communities.</p>
            </div>
            <div className='home-video'>
                <video className='video' autoPlay controls loop>
                    <source src={introVideo} type='video/mp4' />
                    Video not supported by your browser.
                </video>
            </div>
        </div>
    )
};

export default HomeVideo;
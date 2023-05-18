import './homeVid.scss';
import { introVideo } from '../../assets/videos';

const HomeVideo = () => {
    return (
        <div className='home-vid'>
            <div className='hv-text'>
                <p className='hv-text1'>Welcome to</p>
                <p className='hv-text2'>Kreatives Lobby</p>
                <p className='hv-text3'>A multi-service branding and creative partner.</p>
                <q className='hv-text3'>
                    <i style={{fontWeight: 400}}>
                        Many ideas grow better when transplanted into
                        another mind than the one where they sprang up.
                    </i>
                </q>  
                <p className='hv-text3'>Telling stories and building communities.</p>
            </div>
            <div className='home-video'>
                <video className='video' controls autoPlay loop muted>
                    <source src={introVideo} type='video/mp4' />
                    Video not supported by your browser.
                </video>
            </div>
        </div>
    )
};

export default HomeVideo;
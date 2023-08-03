import './homeVid.scss';
import { introVideo, kreatives } from '../../assets/videos';

const HomeVideo = () => {
    return (
        <div className='home-vid'>
            <div className='hv-text'>
                <div className='hv'>
                    <video className='hv-vid' autoPlay loop>
                        <source src={kreatives} type='video/mp4' />
                        Video not supported by your browser.
                    </video>
                </div>
                <p className='hv-text2'>Driving change through art.</p>
                <div style={{paddingBottom: '1rem'}}>
                    <q className='hv-text2'>
                    <i style={{fontWeight: 400}}>
                        Art is the language of the heart.
                    </i>
                </q>  
                <span className='hv-text2' style={{fontWeight: 400}}> - Marc Chagall</span>
                </div>
                <p className='hv-text2'>We are telling stories and building communities.</p>
            </div>
            <div className='home-video'>
                <video className='video' controls loop>
                    <source src={introVideo} type='video/mp4' />
                    Video not supported by your browser.
                </video>
            </div>
        </div>
    )
};

export default HomeVideo;
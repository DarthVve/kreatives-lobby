import './homeVid.scss';
import { introVideo } from '../../assets/videos';

const HomeVideo = () => {
    return (
        <div className='home-vid'>
            <div>
                <video className='video' src={introVideo} controls autoPlay loop>
                    Video Format is not supported
                </video>
            </div>
            <div className='hv-text'>

            </div>
        </div>
    )
};

export default HomeVideo;
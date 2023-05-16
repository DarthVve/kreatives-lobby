import './about.scss';
import { kreatives } from '../../assets/images';

const About = () => {
    return (
        <div id='about' className='home-text'>
            <div className='hm-image'>
                <img src={kreatives} alt='A picture of Kreatives'/>
            </div>
            <div className='hm-text'>
                <p className='text1'>
                    Strong communities are critical because
                    we become a part of something greater than ourselves.
                    Participating in a community bonded by attitudes,
                    values, and goals is essential to enjoying a fulfilling life.
                </p>
                <p className='text2'>
                    At Kreatives’ Lobby, we are truly about the art,
                    and supporting the people who kreate it, either film, music,
                    poetry, comedy, fashion, and dance. The list is endless.
                    A community of, well, as the name implies, kreatives.
                    Do you have an idea, a project you are working on,
                    need financial support, or are you just looking for a
                    community of like-minded people to bounce ideas and share
                    experiences? A place to learn and “perfect” your craft?
                    At the Kreatives’ Society, we are looking forward to welcoming you.
                    You can access shows and events in the kreative space as an active member.
                </p>
                <p className='text3'>
                    Collaborations aimed at impact. Are you an organization or brand looking
                    for exposure or trying to work with kreatives? We have a vast portfolio of
                    projects you can collaborate with us on, or we could design and execute
                    a new project to cater to your specific needs…
                </p>
            </div>
        </div>
    )
};

export default About;
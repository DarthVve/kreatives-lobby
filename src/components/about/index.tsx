import './about.scss';
import { kreatives } from '../../assets/images';

const About = () => {
    return (
        <div id='about' className='home-text'>
            <div className='hm-image'>
                <img src={kreatives} alt='Creative Group' loading='lazy'/>
            </div>
            <div className='hm-text'>
                <p className='text1'>
                    The Kreatives Lobby Initiative is a not-for-profit organisation
                    driving change through art. Art can drive social change by
                    raising awareness of important issues, promoting social justice,
                    advocating for policy change, building community, and encouraging
                    creativity and innovation.
                </p>
                <p className='text2'>
                    We can create a more just and equitable world by using art to
                    address critical issues. We are truly about the art, the art
                    form and supporting the people who create it, from film to
                    music, poetry, comedy, fashion, dance, etc. The list is endless.
                    We are building a community of creatives and art
                    enthusiasts—collaborations aimed at impact.
                </p>
                <p className='text3'>
                    Are you a creative organisation or brand looking to improve society
                    and trying to work with creatives? We have a vast portfolio of
                    projects you can collaborate with us on, or we could design and
                    execute a new project to cater to your specific interests…
                </p>
            </div>
        </div>
    )
};

export default About;
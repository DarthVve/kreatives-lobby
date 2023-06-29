import './team.scss';
import { teamData } from "./teamData";``

const Team = () => {
    return (
        <div className='teams'>
            <h1 className='team-title'>OUR TEAM</h1>
            <div className='team'>
                {teamData.map((item, index) => {
                    return (
                    <article className='team-member' key={index}>
                        <img src={item.image} alt='Team Member' loading='lazy'/>
                        <div className='team-text'>
                            <h2>{item.name}</h2>
                            <p>{item.role}</p>
                        </div>
                    </article>
                )})}
            </div>
        </div>
    )
};

export default Team;

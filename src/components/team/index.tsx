import { useState } from 'react';

import './team.scss';
import { teamData } from "./teamData";``

const Team = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const toggleInfo = (index: number) => { 
        return () => { 
            setShowInfo(!showInfo);
            setActiveTab(index);
        }
    };

    return (
        <div className='teams'>
            <h1 className='team-title'>OUR TEAM</h1>
            <div className='team'>
                {teamData.map((item, index) => {
                    return (
                    <div className='team-info' onClick={toggleInfo(index)}>
                            <article className={showInfo && activeTab === index ? 'active team-member' : 'team-member' } key={index}>
                            <img src={item.image} alt='Team Member' loading='lazy'/>
                            <div className='team-text'>
                                <h2>{item.name}</h2>
                                <p>{item.role}</p>
                            </div>
                        </article>
                        {showInfo && activeTab == index && <div className='team-body'>
                            <p className='team-role'>{item.description}</p>
                        </div>}
                    </div>
                )})}
            </div>
        </div>
    )
};

export default Team;

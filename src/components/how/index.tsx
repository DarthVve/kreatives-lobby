import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { MdOutlineBrush } from 'react-icons/md';
import {TfiPalette} from 'react-icons/tfi'

import './how.scss';
import { howData } from './howData';

const HowWeMakeIt = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const toggleInfo = (index: number) => { 
        return () => { 
            setShowInfo(!showInfo);
            setActiveTab(index);
        }
    };

    return (
        <div className='how-we'>
            <h1 className='how-we-title'>HOW WE MAKE IT HAPPEN</h1>
            <p className='how-we-text'>
                We begin by identifying and understanding a particular societal issue, understanding the needs
                & connection between various stakeholders and the people we want to reach. From there, we work
                together to imagine all future possibilities. Build and Test ideas. And accelerate the right
                solutions all the way into people’s lives.
            </p>
            <div className='how-we-container'>
                {howData.map((item, index) => { 
                    return (
                        <article className='how' key={index}>
                            <header className='how-header'>
                                <h2 className='how-title' onClick={toggleInfo(index)}>{item.title}</h2>
                                <button className='how-btn' onClick={toggleInfo(index)}>
                                    {showInfo && activeTab == index ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                                </button>
                            </header>
                            {showInfo && activeTab == index && <div className='how-body'>
                                {item.content.map((step, index) => { 
                                    return (
                                        <>
                                            <p className='how-text' key={index}><MdOutlineBrush/><TfiPalette/> {step}</p>
                                            <br/>
                                        </>
                                    )
                                })}
                            </div>}
                        </article>
                    )
                })}
            </div>
        </div>
    )
};

export default HowWeMakeIt;
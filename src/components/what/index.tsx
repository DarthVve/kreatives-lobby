import './what.scss';
import { whatData } from "./whatData";

const WhatWeDo = () => {
    return (
        <div className='what-container'>
            <h1 className='what-title'>WHAT WE DO</h1>
            <p className='what-text'>We organize art campaigns. Our art campaigns are series of connected events, activities and projects that are aimed at providing awareness, fostering conversations, advocating policy change and providing solutions on pressing social issues.</p>
            <p className='what-subhead'>Core Pillars Of Our Campaigns</p>
            <div className="what">
                {whatData.map((item, index) => {
                    return (
                        <article className="what-we-do" key={index}>
                            <img src={item.image} alt='Creative Services' loading='lazy'/>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    )
};

export default WhatWeDo;
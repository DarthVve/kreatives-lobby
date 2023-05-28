import './what.scss';
import { whatData } from "./whatData";

const WhatWeDo = () => {
    return (
        <div className='what-container'>
            <h1 className='what-title'>WHAT WE DO</h1>
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
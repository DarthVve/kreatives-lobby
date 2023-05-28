import { useState } from 'react';

import './partners.scss';
import { americanCola, haltine, highModels, misties, onye, planet, redCircle, silverbird, silverbirdTv, sme, sony, tee9, tornado } from '../../assets/logos';


const LOGOS = [americanCola, haltine, highModels, misties, onye, planet, redCircle, silverbird, silverbirdTv, sme, sony, tee9, tornado];
const LOOP = new Array(2).fill(1);

const Partners = () => {
    return (
        <div>
            <p className='partner-text'>Brands We've Partnered With!</p>
            <div className='partners'>
                {LOOP.map((_, index) => ( 
                    <div className='logo-carousel' key={index}>
                        {LOGOS.map((logo, index) => (
                            <img key={index} src={logo} alt='Creative Partners' loading='lazy' />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Partners;
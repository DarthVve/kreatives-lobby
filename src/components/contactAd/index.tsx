import { ImArrowDownRight2, ImArrowDown2, ImArrowDownLeft2 } from 'react-icons/im';

import './contactAd.scss';

const ContactAd = () => {
    return (
        <div  id='contact' className='contact-ad'>
            <h1 className='contact-ad-title'>CONTACT US</h1>
            <div className='contact-ad-icon'>
                <ImArrowDownRight2 size={30} />
                <ImArrowDown2 size={30} />
                <ImArrowDownLeft2 size={30} />
            </div>
        </div>
    )
};

export default ContactAd;
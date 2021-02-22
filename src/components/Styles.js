import React from 'react';
import Icon from '../images/svg/css3.svg';

const Styles = () => {
    return (
        <div className='bg-white p-8 flex-1 md:mr-10 mb-8 md:mb-0 relative overflow-hidden'>
            <h2 className='text-4xl md:text-5xl mb-6 leading-none'>Styles</h2>
            <div
                className='absolute'
                style={{
                    width: '250px',
                    maxWidth: '65%',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    right: '-2rem',
                    color: 'hsl(228deg 78% 52% / 20%)',
                }}
            >
                <Icon className='w-full h-full fill-current' />
            </div>
            <ul className='list-disc list-inside'>
                <li>CSS</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Styled components</li>
            </ul>
        </div>
    );
};

export default Styles;

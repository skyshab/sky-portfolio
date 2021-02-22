import React from 'react';
import Icon from '../images/svg/javascript.svg';

const Scripts = () => {
    return (
        <div className='bg-white p-8 flex-1 relative overflow-hidden'>
            <h2 className='text-4xl md:text-5xl mb-6 leading-none'>Scripts</h2>
            <div
                className='absolute'
                style={{
                    width: '250px',
                    maxWidth: '65%',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    right: '-2rem',
                    color: 'hsl(52deg 84% 63% / 20%)',
                }}
            >
                <Icon className='icon-wp w-full h-full fill-current' />
            </div>

            <ul className='list-disc list-inside'>
                <li>ECMAScript 6</li>
                <li>React</li>
                <li>Redux</li>
                <li>jQuery</li>
                <li>GraphQl</li>
            </ul>
        </div>
    );
};

export default Scripts;

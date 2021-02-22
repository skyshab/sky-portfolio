import React from 'react';
import Icon from '../images/svg/cogs.svg';

const Build = () => {
    return (
        <div className='bg-white p-8 flex-1 relative overflow-hidden'>
            <h2 className='text-4xl md:text-5xl mb-6 leading-none'>Build</h2>
            <div
                className='absolute'
                style={{
                    width: '250px',
                    maxWidth: '65%',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    right: '-2rem',
                    color: 'hsl(270deg 50% 40% / 20%)',
                }}
            >
                <Icon className='icon-wp w-full h-full fill-current' />
            </div>
            <ul className='list-disc list-inside'>
                <li>NPM</li>
                <li>Composer</li>
                <li>WebPack</li>
                <li>Gulp</li>
                <li>Git </li>
                <li>Docker</li>
                <li>Gatsby</li>
            </ul>
        </div>
    );
};

export default Build;

import React from 'react';
import Icon from '../images/svg/wordpress.svg';

const WordPress = () => {
    return (
        <div className='bg-white p-8 flex-1 md:mr-10 mb-8 md:mb-0 relative overflow-hidden'>
            <h2 className='text-4xl md:text-5xl mb-6 leading-none'>
                WordPress
            </h2>
            <div
                className='absolute'
                style={{
                    width: '250px',
                    maxWidth: '65%',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    right: '-2rem',
                    color: 'hsl(199deg 65% 37% / 20%)',
                }}
            >
                <Icon className='icon-wp w-full h-full fill-current' />
            </div>
            <ul className='list-disc list-inside'>
                <li>Theme and plugin development</li>
                <li>Gutenberg block development</li>
                <li>WooCommerce setup and customization</li>
                <li>Multisite setup and management</li>
                <li>Headless WordPress </li>
                <li>Advanced Custom Fields</li>
            </ul>
        </div>
    );
};

export default WordPress;

import React from 'react';
import { Link } from 'gatsby';
import Icon from '../images/svg/github.svg';

const scrollToAnchor = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);

    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
    });
};

const Nav = () => {
    return (
        <nav className='flex justify-end container'>
            <ul className='flex m-auto sm:m-0 items-center'>
                <li>
                    <Link
                        to='/#projects'
                        className='mr-6 text-white text-lg font-bold py-2 inline-block lg:py-4'
                        onClick={(e) => {
                            scrollToAnchor(e, '#projects');
                        }}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to='/#contact'
                        className='mr-6 text-white text-lg font-bold py-2 inline-block lg:py-4'
                        onClick={(e) => {
                            scrollToAnchor(e, '#contact');
                        }}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <a
                        href='https://github.com/skyshab'
                        className='text-white w-6'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon className='w-full h-full fill-current' />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

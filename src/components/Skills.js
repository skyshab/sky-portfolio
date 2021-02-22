import React from 'react';

const Skills = () => {
    return (
        <section className='bg-gray-800 text-white'>
            <div className='container py-8 md:py-10'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl mb-6 leading-none'>
                    Skills
                </h2>
                <ul className='list-inside font-bold mb-0'>
                    <li className='flex bg-primary p-2 mb-6'>
                        <div className='language-name w-20'>HTML</div>
                        <div className='year-graph flex-grow mx-4 border border-1 border-white border-opacity-50'>
                            <div
                                className='year-graph-inner h-full w-full'
                                style={{
                                    background:
                                        'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 93%, rgba(255,255,255,0) 93%, rgba(255,255,255,0) 100%)',
                                }}
                            ></div>
                        </div>
                        <div className='year-text w-20'>13 years</div>
                    </li>
                    <li className='flex bg-primary p-2 mb-6'>
                        <div className='language-name w-20'>CSS</div>
                        <div className='year-graph flex-grow mx-4 border border-1 border-white border-opacity-50'>
                            <div
                                className='year-graph-inner h-full w-full'
                                style={{
                                    background:
                                        'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 93%, rgba(255,255,255,0) 93%, rgba(255,255,255,0) 100%)',
                                }}
                            ></div>
                        </div>
                        <div className='year-text w-20'>13 years</div>
                    </li>
                    <li className='flex bg-primary p-2 mb-6'>
                        <div className='language-name w-20'>PHP</div>
                        <div className='year-graph flex-grow mx-4 border border-1 border-white border-opacity-50'>
                            <div
                                className='year-graph-inner h-full w-full'
                                style={{
                                    background:
                                        'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 79%, rgba(255,255,255,0) 79%, rgba(255,255,255,0) 100%)',
                                }}
                            ></div>
                        </div>
                        <div className='year-text w-20'>11 years</div>
                    </li>
                    <li className='flex bg-primary p-2'>
                        <div className='language-name w-20'>Javascript</div>
                        <div className='year-graph flex-grow mx-4 border border-1 border-white border-opacity-50'>
                            <div
                                className='year-graph-inner h-full w-full'
                                style={{
                                    background:
                                        'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 71%, rgba(255,255,255,0) 71%, rgba(255,255,255,0) 100%)',
                                }}
                            ></div>
                        </div>
                        <div className='year-text w-20'>10 years</div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;

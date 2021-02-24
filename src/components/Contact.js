import React from 'react';

const Contact = () => {
    return (
        <section className='bg-gray-800' id='contact'>
            <div className='container py-8 md:py-10'>
                <h2 className='text-4xl md:text-5xl mb-8 leading-none text-white'>
                    Hire Me
                </h2>

                <div className='flex flex-col md:flex-row'>
                    <div className='bg-gray-700 p-8 w-full md:w-1/2 mr-8 mb-8 md:mr-10 md:mb-10 text-white'>
                        <h3 className='text-3xl leading-none mb-4'>
                            Project Based
                        </h3>

                        <p className='m-0'>
                            Need a developer for your web project? I can bring
                            your designs to life with the functionality your
                            site needs.
                        </p>
                    </div>

                    <div className='bg-gray-700 p-8 w-full md:w-1/2 mb-8 md:mb-10 text-white'>
                        <h3 className='text-3xl leading-none mb-4'>
                            Full Time
                        </h3>

                        <p className='m-0'>
                            Need a developer on your remotely distributed team?
                            I'm currently seeking full time opportunities to
                            join the right team.
                        </p>
                    </div>
                </div>

                <form
                    method='post'
                    netlify-honeypot='bot-field'
                    data-netlify='true'
                    name='contact'
                >
                    <input type='hidden' name='bot-field' />
                    <input type='hidden' name='form-name' value='contact' />

                    <div className='flex flex-col md:flex-row'>
                        <div className='mb-10 w-1/2 mr-10 w-full'>
                            <label for="email" className="sr-only">Email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='w-full p-2'
                            />
                        </div>
                        <div className='mb-10 w-1/2 w-full'>
                            <label for="name" className="sr-only">Name</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                className='w-full p-2'
                            />
                        </div>
                    </div>

                    <div>
                        <label for="message" className="sr-only">Message</label>
                        <textarea
                            className='w-full p-2'
                            rows='6'
                            name='message'
                            placeholder='Your message'
                        />
                    </div>

                    <div className='flex justify-end'>
                        <button
                            type='submit'
                            value='Submit'
                            className='block bg-primary hover:bg-primaryDark text-white text-center font-semibold py-2 px-4 mt-8'
                        >
                            Let's Talk
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;

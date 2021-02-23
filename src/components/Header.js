import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Nav from './Nav';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "laptop-coffee.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sky: file(relativePath: { eq: "sky.png" }) {
                childImageSharp {
                    fixed(width: 200, height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <header className='relative'>
            <Nav />

            <Img
                fluid={data.heroImage.childImageSharp.fluid}
                className='heroImage'
                style={{ position: 'absolute' }}
            />

            <div className='heroOverlay bg-primary opacity-75'></div>

            <div
                className='container flex flex-col md:flex-row items-center pb-12'
                style={{ minHeight: '30vw' }}
            >
                <div className='sky-profile flex-shrink-0 md:mr-8'>
                    <Img fixed={data.sky.childImageSharp.fixed} />
                </div>
                <div className='heroContent text-white'>
                    <h1 className='text-center md:text-left m-0 mb-1 text-4xl md:text-6xl leading-none'>
                        Sky Shabatura
                    </h1>
                    <p className='md:text-xl'>
                        I have over a decade of experience in web development, site maintenance, product support and user training. I develop custom WordPress and Javascript solutions to meet the unique needs of a website and its users.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;

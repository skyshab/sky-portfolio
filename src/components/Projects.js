import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

function ProjectsNew() {
    const data = useStaticQuery(graphql`
        query {
            supplypike: file(relativePath: { eq: "supplypike/featured.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            apa: file(
                relativePath: {
                    eq: "american-poolplayers-association/featured.jpg"
                }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            uofa: file(
                relativePath: { eq: "university-of-arkansas/featured.jpg" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hunt: file(relativePath: { eq: "hunt-ventures/featured.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <section id='projects'>
            <div className='container py-8 md:py-10'>
                <h2 className='text-4xl md:text-5xl mb-8 md:mb-10 leading-none text-center'>
                    Projects
                </h2>

                <div className='grid gap-12 grid-cols-1 md:grid-cols-2'>
                    <Link to='/project/supplypike' className='block'>
                        <Img
                            fluid={data.supplypike.childImageSharp.fluid}
                            className='supplypike project-image'
                            style={{ position: 'relative' }}
                            alt="supplypike"
                        />
                    </Link>

                    <Link
                        to='/project/american-poolplayers-association'
                        className='block'
                    >
                        <Img
                            fluid={data.apa.childImageSharp.fluid}
                            className='apa project-image'
                            style={{ position: 'relative' }}
                            alt="apa"
                        />
                    </Link>

                    <Link
                        to='/project/university-of-arkansas'
                        className='block'
                    >
                        <Img
                            fluid={data.uofa.childImageSharp.fluid}
                            className='uofa project-image'
                            style={{ position: 'relative' }}
                            alt="uofa"
                        />
                    </Link>

                    <Link to='/project/hunt-ventures' className='block'>
                        <Img
                            fluid={data.hunt.childImageSharp.fluid}
                            className='hunt project-image'
                            style={{ position: 'relative' }}
                            alt="hunt"
                        />
                    </Link>
                </div>

                <Link
                    to='/project/ames'
                    className='block bg-primary hover:bg-primaryDark text-white text-center font-semibold py-2 px-4 mx-auto mt-12'
                    style={{ width: '250px' }}
                >
                    View More projects
                </Link>
            </div>
        </section>
    );
}

export default ProjectsNew;

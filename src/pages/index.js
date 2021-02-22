import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Styles from '../components/Styles';
import Scripts from '../components/Scripts';
import WordPress from '../components/WordPress';
import Build from '../components/Build';
import Contact from '../components/Contact';

export default function Template({ data }) {
    return (
        <>
            <SEO title={'Home'} />
            <Header />
            <main>
                <Skills />
                <section className='bg-gray-700'>
                    <div className='container py-8 md:py-10 flex flex-col md:flex-row'>
                        <Styles />
                        <Scripts />
                    </div>
                </section>
                <section className='bg-gray-800'>
                    <div className='container py-8 md:py-10 flex flex-col md:flex-row'>
                        <WordPress />
                        <Build />
                    </div>
                </section>
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: frontmatter___year, order: DESC }) {
            nodes {
                frontmatter {
                    slug
                    title
                    subtitle
                    year
                    featuredImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

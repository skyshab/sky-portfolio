import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import Gallery from '@browniebroke/gatsby-image-gallery';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { Link } from 'gatsby';

const Template = ({ data, pageContext }) => {
    const {
        markdownRemark: { frontmatter, html },
    } = data;

    const { prev, next } = pageContext;

    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

    const allImages = data.images.edges.map(({ node }) => ({
        ...node.childImageSharp,
        // Use original name as caption.
        // The `originalName` is queried inside the `thumb` field,
        // but the `Gallery` component expects `caption` at the top level.
        caption: node.childImageSharp.thumb.originalName,
    }));

    // don't show featured image in gallery
    const images = allImages.filter(
        (image) => image.caption !== 'featured.jpg' && image.caption !== 'featured.png'
    );

    // Override some of Lightbox options to localise labels in French
    const lightboxOptions = {
        imageLoadErrorMessage: 'Error loading image',
        nextLabel: 'Next image',
        prevLabel: 'Previous image',
        zoomInLabel: 'Zoom in',
        zoomOutLabel: 'Zoom out',
        closeLabel: 'Close',
        imageCaption: false,
        imagePadding: 50,
    };

    return (
        <>
            <SEO title={frontmatter.title} />

            <header className='bg-primary text-white'>
                <div className='container py-4 flex justify-between'>
                    <Link
                        to='/'
                        className='no-underline hover:no-underline focus:no-underline'
                    >
                        <span className='text-white text-4xl md:text-5xl leading-none'>
                            Sky Shabatura
                        </span>
                    </Link>
                    <Link
                        to='/#contact'
                        className='text-white text-lg font-bold py-2 lg:py-4'
                    >
                        Contact Me
                    </Link>
                </div>
            </header>
            <nav className='flow-root bg-gray-400'>
                <div className='container py-3 flex justify-between'>
                    <div>
                        {prev && (
                            <Link
                                to={prev}
                                className='text-white text-xl font-bold'
                            >
                                &lt; Prev
                            </Link>
                        )}
                    </div>
                    <div>
                        {next && (
                            <Link
                                to={next}
                                className='text-white text-xl font-bold'
                            >
                                Next &gt;
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            <main>
                <div className='container py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='col-span-1'>
                            <Img fluid={featuredImgFluid} />
                        </div>
                        <div className='col-span-2'>
                            <h1 className='text-4xl md:text-5xl leading-none'>
                                {frontmatter.title}
                            </h1>
                            <p className='text-gray-500 text-3xl md:text-4xl leading-snug'>
                                {frontmatter.subtitle}
                            </p>
                            <p className='text-2xl font-bold mb-4'>
                                Year: {frontmatter.year}
                            </p>
                            <div
                                className='page-content'
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                    <h2 className='text-4xl md:text-5xl mb-6 leading-none'>
                        Screenshots
                    </h2>
                    <Gallery
                        images={images}
                        lightboxOptions={lightboxOptions}
                        gutter='1rem'
                        imgClass='cursor-pointer'
                    />
                </div>
                <a
                    href='#'
                    className='text-center py-4 block'
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                >
                    back to top ^
                </a>
            </main>
            <Footer />
        </>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
                subtitle
                year
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        images: allFile(
            filter: { relativeDirectory: { eq: $slug } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    childImageSharp {
                        thumb: fluid(maxWidth: 270, maxHeight: 270) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                        full: fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

export default Template;

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { fields: frontmatter___year, order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const projects = result.data.allMarkdownRemark.edges;

    projects.forEach(({ node }, index) => {
        const slug = node.frontmatter.slug;

        createPage({
            path: `/project/${slug}`,
            component: require.resolve(`./src/templates/projectTemplate.js`),
            context: {
                // additional data can be passed via context
                slug: slug,
                prev:
                    index === 0
                        ? null
                        : '/project/' +
                          projects[index - 1].node.frontmatter.slug,
                next:
                    index === projects.length - 1
                        ? null
                        : '/project/' +
                          projects[index + 1].node.frontmatter.slug,
            },
        });
    });
};

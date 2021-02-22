/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Add here classes that you want applied to the `<html>` element
exports.onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({
        className:
            'leading-normal text-md lg:text-lg font-sans text-gray-800 antialiased',
    });
};

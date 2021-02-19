const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");
const withImages = require('next-images')
module.exports = withImages({
    esModule: true
})

module.exports = withMdxEnhanced({
    layoutPath: "src/layouts",
    defaultLayout: true,
    rehypePlugins: [rehypePrism],
})({
    pageExtensions: ["mdx", "tsx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            ...[{
                    test: /\.yml$/,
                    type: "json",
                    use: "yaml-loader",
                },
                {
                    test: /\.svg$/,
                    use: "@svgr/webpack",
                },
            ]
        );
        return config;
    },
}), {
    devIndicators: {
        autoPrerender: false,
    },
};
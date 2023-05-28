const withCSS = require('@zeit/next-css');
const compose = require('next-compose');
cssConfig = {};

const nextConfig = {
    images: {
        domains: ['i1.sndcdn.com', 'i.imgur.com'],
    },
};

module.exports = {
    ...nextConfig,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                    },
                },
            ],
        });
        return config;
    },
};

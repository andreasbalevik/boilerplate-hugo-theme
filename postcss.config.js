const purgecss = require('@fullhuman/postcss-purgecss')({
    map: false,
    content: ['./**/*.html'],
    safelist: ['carousel-item-next', 'carousel-item-end', 'carousel-item-prev']
});

module.exports = {
    plugins: [
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
};
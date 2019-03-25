module.exports = (env) => {
    if (env.NODE_ENV === 'production') {
        return require('./webpack/pro.config');
    } else {
        return require('./webpack/dev.config');
    }
}
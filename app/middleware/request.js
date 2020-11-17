'use strict';

module.exports = (options, app) => {
    return async (ctx, next) => {
        const request = ctx.request
        // console.log('request ================ ', request)
        ctx.userId = 'lfo';
        await next();
    }
}
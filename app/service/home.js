'use strict';
const Service = require('egg').Service;

class HomeService extends Service {

    async getHome() {
        this.ctx.getLogger('test').info('test log');
    }

}

module.exports = HomeService;

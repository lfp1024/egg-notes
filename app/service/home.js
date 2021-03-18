'use strict';
const Service = require('egg').Service;

class HomeService extends Service {

    async getHome() {
        this.app.getLogger('test').info('test log');
        setTimeout(() => {
            this.app.redis.emit('redis:test', 'redis emit');
            this.app.getLogger('test').info('触发');
        }, 1000);
    }
}

module.exports = HomeService;

'use strict';

const { Subscription } = require('egg');

class CronTest extends Subscription {

    static get schedule() {
        return {
            // cron: '* * * * * *', // 1s 一次
            cron: '5 * * * * *',
            // cron: '*/45 * * * * *', // 每分钟的第45s执行一次
            // cron: '*/20 * * * * *', // 每分钟的第00s、20s、40s执行一次
            // cron: '0 * * * * *', // 整分钟执行一次
            // cron: '0 0 * * * *', // 整小时执行一次
            // cron: '0 31 * * * *', // 每个小时的第31分钟执行一次（11:31,12:31,13:31 ...）
            // cron: '0 0 0 * * *', // 凌晨零点执行一次
            type: 'worker',
        };
    }
    async subscribe() {
        console.log(new Date().toLocaleString());
        // 定时器驱动的逻辑，不适合用ctx.logger
        // this.ctx.getLogger('test').info('schedule drive')
        await this.ctx.service.home.getHome();
    }

}

module.exports = CronTest;

const { Subscription } = require('egg')

class CronTest extends Subscription {

    static get schedule() {
        return {
            // cron: '* * * * * *', // 1s 一次
            // cron: '*/45 * * * * *', // 每分钟的第45s执行一次
            // cron: '*/20 * * * * *', // 每分钟的第00s、20s、40s执行一次
            // cron: '0 * * * * *', // 整分钟执行一次 
            cron: '0 0 * * * *', // 整小时执行一次
            // cron: '0 0 0 * * *', // 凌晨零点执行一次
            type: 'worker',
        };
    }

    n = 1
    async subscribe() {
        console.log(new Date().toLocaleString())
    }

}

module.exports = CronTest;
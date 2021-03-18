'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.ctx.logger.info('hi log');
    this.app.getLogger('test').info('1111111111111');
    this.app.redis.on('redis:test', msg => {
      this.app.getLogger('test').info('once msg = ', msg);
    });
    this.app.getLogger('test').info('2222222222222');
    this.service.home.getHome();
    ctx.body = 'hi, egg';
    ctx.status = 200;
  }
}

module.exports = HomeController;

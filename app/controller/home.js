'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.ctx.logger.info('hi log')
    this.ctx.getLogger('test').info('request drive') // 都会写入 test 日志文件
    this.app.getLogger('test').info('request drive')
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;

'use strict';

const Tracer = require('egg-tracer');

let counter = 0;

class MyTracer extends Tracer {
    get traceId() { // 覆盖 egg-tracer 中的同名方法，才会调用自己的 tracer
        console.log('22222')
        return `${counter++}-${Date.now()}-${process.pid}`;
    }
}

module.exports = MyTracer;

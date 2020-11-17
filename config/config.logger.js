'use strict';

const path = require('path');
const basePath = '../logs';

module.exports = {
    'test': {
        file: path.join(__dirname, basePath, 'test.log'),
    },
};


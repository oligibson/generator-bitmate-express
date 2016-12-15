'use strict';

const bitmate = require('bitmate-generator');

module.exports = bitmate.Base.extend({
    prompting: {
        bitmate() {
            this.options.server = 'express';
            return this.serverPrompts();
        }
    },

    configuring() {
        this.mergeJson('package.json', {
            dependencies: {
                express: '^4.14.0'
            }
        });
    },

    writing() {
        const files = [
            'server/app.js',
            'server/routes.js'
        ];

        files.forEach(file => {
            this.copyTemplate(file, file, this.options);
        });
    }
});
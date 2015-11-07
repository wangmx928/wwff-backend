var _ = require('lodash');

/**
* Chapter.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports = {
    attributes: {
        chapterName: {
            type: 'string'
        },

        members: {
            collection: 'user',
            via: 'chapter'
        },
        events: {
            collection: 'event',
            via: 'chapter'
        }
    },

    createTestChapter: function(options, cb) {
        Chapter.create(_.assign({
            chapterName: 'University of Michigan'
        }, options), function(err, chapter) {
            cb();
        });
    }
};

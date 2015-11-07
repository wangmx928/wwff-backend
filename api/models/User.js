/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    attributes: {
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },

        chapter: {
            model: 'chapter'
        }
    },

    createTestUsers: function(cb) {
        User.create([
            {
                firstName: 'Jon',
                lastName: 'Rubins'
            },
            {
                firstName: 'Kelly',
                lastName: 'Flowers'
            }
        ], function(err, users) {
            cb(users);
        });
    }
};

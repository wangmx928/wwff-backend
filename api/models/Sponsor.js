/**
* Sponsor.js
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

        donation: {
            model: 'donation'
        }
    },

    createTestSponsor: function(cb) {
        Sponsor.create({
            firstName: 'John',
            lastName: 'Doe'
        }, function(err, sponsor) {
            cb(sponsor);
        });
    }
};

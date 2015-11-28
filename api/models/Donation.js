/**
* Donation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    attributes: {
        amount: {
            type: 'float'
        },

        user: {
            model: 'user'
        },
        sponsor: {
            model: 'sponsor'
        }
    },

    createTestDonation: function(users, sponsor, cb) {
        Donation.create({
            user: users[0],
            sponsor: sponsor,
            amount: 20.50
        }, function(err, donation) {
            cb();
        });
    }
};


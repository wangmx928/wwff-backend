var async = require('async');

/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
module.exports.bootstrap = function(cb) {
    if(process.env.NODE_ENV !== 'development') {
        return cb();
    }

    User.createTestUsers(function(users) {
        Sponsor.createTestSponsor(function(sponsor) {
            Donation.createTestDonation(users, sponsor, function() {
                Chapter.createTestChapter({ members: users }, function(chapter) {
                    Event.createTestEvents(users, chapter, function(events) {
                        cb();
                    });
                });
            });
        });
    });
};

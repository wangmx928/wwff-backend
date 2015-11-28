var waterlock = require('waterlock')

/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
    attributes: waterlock.models.user.attributes({
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },

        chapter: {
            model: 'chapter'
        },
        profile: {
            model: 'profile'
        },
        events: {
            collection: 'event',
            via: 'organizer'
        },
        donations: {
            collection: 'donation',
            via: 'user'
        }
    }),

    beforeCreate: waterlock.models.user.beforeCreate,
    beforeUpdate: waterlock.models.user.beforeUpdate,

    /*create: function(req, res, next) {
        var params = waterlock.utils.allParams(req),
           // params to pass to auth for craeation
           auth = {
                email: params.email,
                password: params.password
            };

        // create user
        User.create({
                firstName: params.firstName,
                lastName: params.lastName
            })
            .exec(function(err, user) {
                waterlock.engine.attachAuthToUser(auth, user, function(err) {
                    if (err) {
                        sails.log.error(err);
                        res.json(err);
                    } else {
                        waterlock.cycle.loginSuccess(req, res, user);

                        return res.json(user);
                    }
                });
            });
    },*/

    createTestUsers: function(cb) {
        User.create([
            {
                firstName: 'Jon',
                lastName: 'Rubins',
                profile: {
                    profileImg: 'jon-profile-pic.jpg',
                    biography: 'This is my profile'
                }
            },
            {
                firstName: 'Kelly',
                lastName: 'Flowers',
                profile: {
                    biography: 'My biography is better!'
                }
            }
        ], function(err, users) {
            waterlock.engine.attachAuthToUser({
                'email': 'jonrubins@gmail.com',
                'password': 'password'
            }, users[0], function (err) {
                cb(users);
            });
        });
    }
};

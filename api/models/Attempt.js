var waterlock = require('waterlock');

/**
 * Attempt
 *
 * @module      :: Model
 * @description :: Tracks login attempts of users on your app.
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
    attributes: waterlock.models.attempt.attributes({})
};

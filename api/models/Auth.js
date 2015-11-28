var waterlock = require('waterlock');

/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
    attributes: waterlock.models.auth.attributes({}),

    beforeCreate: waterlock.models.auth.beforeCreate,
    beforeUpdate: waterlock.models.auth.beforeUpdate
};

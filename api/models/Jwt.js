var waterlock = require('waterlock');

/**
 * Jwt
 *
 * @module      :: Model
 * @description :: Holds all distributed json web tokens
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
    attributes: waterlock.models.jwt.attributes({})
};

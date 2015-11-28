var waterlock = require('waterlock');

/**
 * ResetToken
 *
 * @module      :: Model
 * @description :: Describes a users reset token
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
    attributes: waterlock.models.resetToken.attributes({}),

    beforeCreate: waterlock.models.resetToken.beforeCreate,
    afterCreate: waterlock.models.resetToken.afterCreate
};

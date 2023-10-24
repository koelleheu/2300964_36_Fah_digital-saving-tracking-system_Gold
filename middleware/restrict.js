const passport = require('../lib/passport');

// For student authentication
const studentRestrict = passport.authenticate('user-jwt', { session: false });

// For admin authentication
const adminRestrict = passport.authenticate('admin-jwt', { session: false });

module.exports = { studentRestrict, adminRestrict };

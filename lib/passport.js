const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../db/db');

const jwtSecret = 'ini rahasia tidak boleh disebar';

const studentJwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwtSecret,
};

const adminJwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwtSecret,
};

const studentVerify = (payload, done) => {
  db('students')
    .where({
      student_id: payload.student_id,
      role: 'user'
    })
    .first()
    .then((student) => {
      if (!student) {
        return done(null, false, { message: 'Student not found' });
      }

      return done(null, student);
    })
    .catch((err) => {
      return done(err, false, { message: err.message });
    });
};

const adminVerify = (payload, done) => {
  db('admins')
    .where({
      username: payload.username,
      role: 'admin'
    })
    .first()
    .then((admin) => {
      if (!admin) {
        return done(null, false, { message: 'Admin not found' });
      }

      return done(null, admin);
    })
    .catch((err) => {
      return done(err, false, { message: err.message });
    });
};

passport.use('user-jwt', new JwtStrategy(studentJwtOptions, studentVerify));
passport.use('admin-jwt', new JwtStrategy(adminJwtOptions, adminVerify));

module.exports = passport;

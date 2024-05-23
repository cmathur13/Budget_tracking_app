const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//added lines below
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  // callbackURL: 'http://localhost:3000/auth/google/callback'
  callbackURL: 'https://bbae-70-49-31-188.ngrok-free.app/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
  // Save user profile information to the database
  return done(null, profile);
}));
//added lines below
passport.serializeUser(function(user, done) {
  done(null, user);
});
//added lines below
passport.deserializeUser(function(user, done) {
  done(null, user);
});
//added lines below
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:4200/');
});

app.get('/app/user/info', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ username: req.user.displayName, id: req.user.id });
});
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

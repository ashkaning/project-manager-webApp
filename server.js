require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var database = require("./models");
var cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
/* const GitHubStrategy = require("passport-github2").Strategy; */
const auth = require("./controllers/loginController");

app.use(cors())


passport.use(new LocalStrategy(auth.verify));
/*passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  auth.github
)); */

passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessConfig = {
 /*  genid: function (req) {
    return genuuid() // use UUIDs for session IDs
  }, */
  secret: 'keyboard cat',
  store: new SequelizeStore({
    db: database.sequelize,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }),
  resave: false, // we support the touch method so per the express-session docs this should be set to false
  proxy: false,
  cookie: { path: '/', httpOnly: true, maxAge: 1000000 }
}
app.use(session(sessConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}



database.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    //console.log("App listening on PORT " + PORT);
  });
});

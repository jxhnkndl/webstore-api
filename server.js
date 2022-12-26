const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// data parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(() => console.log(`Listening on PORT ${PORT}`));
});
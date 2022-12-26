const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// data parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure routes
app.use(routes);

// connect to db and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

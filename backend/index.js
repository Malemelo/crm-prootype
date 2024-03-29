const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const moongoose = require('mongoose');
const userRoutes = require('./controllers/routes/auth');

//initialise and link the .env file to the server
dotenv.config();

//conecting to the databse
moongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log(`Mongo DB connected successfully`));

//middlewares
app.use(express.json());
app.use(cors());

//routes middleware
//localhost/api/crm/users/register
app.use('/api/crm/users', userRoutes);

//running our Nodejs server.
app.listen(process.env.PORT, () => console.log(`Server up and running on port ${process.env.PORT}`));
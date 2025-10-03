const express = require('express');
const cors = require('cors');
require('./config/connect');
require('dotenv').config();

const boardRoute = require('./routes/board');
const userRoute = require('./routes/user');
const projectRoute = require('./routes/project');
const clientRoute = require('./routes/client');
const { createAdminAccount } = require('./controllers/user');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/board',boardRoute);
app.use('/user',userRoute);
app.use('/project',projectRoute);
app.use('/client',clientRoute);

app.use('/files',express.static('./uploads'));










app.listen(3000,()=>{
    console.log('server work');
    createAdminAccount();
})
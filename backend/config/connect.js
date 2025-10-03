const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/grh')
.then(
    ()=>{
        console.log('connected to mongoDB');
    }
)
.catch(
    (error)=>{
        console.log('failed to connect to mongoDB', error);
    }
);
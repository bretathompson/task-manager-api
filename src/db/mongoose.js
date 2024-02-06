// const mongoose = require('mongoose')
// let remote = 'mongodb+srv://root:Murray14@cluster0.rvclw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const mongoose = require('mongoose');
require('dotenv').config();

const connectionURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/task-manager-api';

options =  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false  
  };


 
   
  mongoose.connection.on('error', err => {
    console.log(error);
  });
  mongoose.connect(connectionURL, options);
 



// change line 5 to (process.env.MONGODB_URL) take line 3 'stuffs' to dev.env line 3

//mongodb+srv://root:<password>@cluster0.rvclw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority




// const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Andrew',
//     age: 'Mike'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

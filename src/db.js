const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('database connected'))
    .catch( err => console.log(err))
const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
    }).then(con => {
        console.log(`MongoDB Database Connected with Host: ${con.connection.host}`)
    }).catch((err) => {
        console.log('Connection Error => ', err.message)
    })
}

module.exports = connectDatabase
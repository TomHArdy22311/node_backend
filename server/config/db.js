let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://karanb:Gandhi$42069@cluster0.qvzb7bx.mongodb.net/kizaTexttiles'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})

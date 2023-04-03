const mongoose =  require('mongoose')
const mongoUri=process.env.MONGODB_URI || "mongodb://localhost:27017/youtubeRegistration"

mongoose.connect(mongoUri,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    // strictQuery: false
}).then(()=>{
    console.log("connected database")
}).catch(e=>{
    console.log(e,'error');
})
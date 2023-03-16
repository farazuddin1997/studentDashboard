const mongoose =  require('mongoose')

mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    // strictQuery: false
}).then(()=>{
    console.log("connected database")
}).catch(e=>{
    console.log(e,'error');
})
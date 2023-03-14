const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/your-jinnie-registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(e);
});
mongoose.set('strictQuery',true);
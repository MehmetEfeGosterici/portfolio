express = require("express");
mongoose = require("mongoose")
router = require("./router")
cors = require("cors");
app = express();
const path = require('path');

port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/api",router);



app.get("/", (req,res)=>{
    res.json("success")
})



mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`Listening at ${port}`);
})
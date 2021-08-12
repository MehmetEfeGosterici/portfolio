express = require("express");
router = require("./router")
cors = require("cors");
app = express();

port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/api",router);

app.get("/",(req,res)=>{
    res.json("success")
})

app.listen(port,()=>{
    console.log(`Listening at ${port}`);
})
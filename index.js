const express = require("express");
const {sqlconnection} = require('./config/db')

const app = express()


app.use(express.json());
sqlconnection()
app.get('/',(req,res)=>{
    res.send("Hello Sonu")
})

const user = require("./routes/user");
app.use("/api/users", user);

const profile = require("./routes/profile")
app.use("/api/users/me",profile)

const joke = require("./routes/joke")
app.use("/api/random-joke",joke)


app.use((err, req, res, next) => {
    return res.status(err.status).json(err);
  });

const port = 4000 ;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
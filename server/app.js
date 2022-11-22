const express=require('express');
const app=express();
const dotenv=require('dotenv')
const cors = require('cors')

dotenv.config({path:'./.env'})
require('./db')

app.use(cors())
app.use(express.json());

// const User=require('./models/userSchema');

// routes
app.use(require('./routes/auth'));
app.use(require('./routes/notes'));

const port=process.env.PORT || 5000;

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`webform server is listening at https://localhost:${port}`)
})

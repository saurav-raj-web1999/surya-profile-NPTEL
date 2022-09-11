const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const staticPath = __dirname;

app.use(express.static(staticPath));

app.get('/', (req, res)=>{
    res.send("Error 404")
})

app.listen(port , ()=>{
    console.log(`Connection successfully and listening to port: ${port}`);
})
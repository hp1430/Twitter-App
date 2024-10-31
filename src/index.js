import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));
app.use(express.json());

app.get('/ping', (req, res) => {
    return res.json({
        message : "pong"
    })
});   //what to do if someone makes a GET request to /ping

app.post('/hello', (req, res) => {
    return res.json({
        message : 'world'
    })
});

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})
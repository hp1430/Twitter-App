import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

app.use(morgan('combined'));
app.use(express.json());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({
        message : "pong"
    })
});   //what to do if someone makes a GET request to /ping

app.get('/', (req, res) => {
    res.render('home', {name: 'John Doe'});
});

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})
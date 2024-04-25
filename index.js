import express from 'express';
import { data } from './data.js';
import cors from 'cors'
import dotenv from 'dotenv/config.js'
import userRoutes from './routes/users.js';
import bodyParser from 'body-parser';

const app = express();
const port = 10000;
app.use(bodyParser.json());
app.use(cors())
app.use('/api', userRoutes) 
app.get('/home', (req, res)=>{
   res.send(data)
})
app.listen(port, ()=> console.log(`server is running on http://localhost:${port}/`))


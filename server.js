import express from 'express'
import { connectTodb } from './configs/db.config.js';
import router from './job.route.js';
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors({
    origin: 'https://jobapplicationtrackerfe.onrender.com',
    credentials: true // if you're using cookies or sessions
}))

server.use('/',router);

const port = process.env.PORT || 4000
server.listen(4000,()=>{
    console.log('server started');
    connectTodb();
})
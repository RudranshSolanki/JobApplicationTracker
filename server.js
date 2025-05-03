import express from 'express'
import { connectTodb } from './configs/db.config.js';
import router from './job.route.js';
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors())

server.use('/',router);

const port = process.env.PORT || 4000
server.listen(4000,()=>{
    console.log('server started');
    connectTodb();
})
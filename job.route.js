import express from 'express'
import { JobController } from './job.controller.js';


const router = express.Router();
const jobController = new JobController();


router.post('/postjob',(req,res)=>{
    jobController.addJob(req,res);
})

router.get('/getjob',(req,res)=>{
    jobController.getAllJobs(req,res);
})
router.delete('/deletejob/:id',(req,res)=>{
    jobController.deleteJob(req,res);
})
router.patch('/updateStatus/:id',(req,res)=>{
    jobController.updateJobStatus(req,res)
})


export default router
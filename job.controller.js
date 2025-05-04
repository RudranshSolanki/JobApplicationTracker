import { JobRepo } from "./job.repo.js";

export class JobController{
    constructor(){
        this.jobRepo = new JobRepo();
    }
    async addJob(req,res){
        console.log(req.body)
        const {company,date} = req.body;
        await this.jobRepo.addJob({company,data:date});
        res.status(201).send('job added');
    }

    async getAllJobs(req,res){
        const jobs = await this.jobRepo.getallJobs();
        res.status(200).send(jobs)
    }
    async deleteJob(req,res){
        console.log(req.params.id)
        const {id} = req.params;
        console.log(id);
        const result = await this.jobRepo.deletJob(id);
        if(result)
        {
            res.status(200).send('Job deleted');
        }
        else{
            res.status(200).send('Job not found');
        }
    }
    async updateJobStatus(req,res){
        const {jobStatus} = req.body
        const id = req.params.id
        const result = await this.jobRepo.updateJobStatus(id,jobStatus);
        if(result)
            res.send('job status updated success');
        else
            res.send('job status is not updated');
    }
}
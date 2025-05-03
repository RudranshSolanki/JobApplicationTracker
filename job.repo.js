import mongoose from "mongoose";
import { jobSchema } from "./schema/job.schema.js";

const model = mongoose.model('Job',jobSchema);
export class JobRepo{
    async addJob(data){
        const  newModel = await model.create(data);
        return newModel;
    }

    async getallJobs(){
        const jobs = await model.find({});
        return jobs
    }
    async deletJob(id){
        const job = await model.findOne({_id:id});
        if(job){
            await model.deleteOne({_id:id});
            return true;
        }
        return false;

    }

    async updateJobStatus(id,status){
        const job = await model.findOne({_id:id})
        console.log(status);
        if(job){
            job.result = status
            await job.save();
            return true;
        }
        return false;
    }
}
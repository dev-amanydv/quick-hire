import { Worker } from "bullmq";
import IORedis from 'ioredis';
import { prisma } from "../../prisma/db";
import { uploadToBucket } from "../utils/upload";
import fs from 'fs';

const connection = new IORedis({ maxRetriesPerRequest: null });

const worker = new Worker('resume-upload', async job => {
    const { resumeId, s3Key, filePath } = job.data;
    try {
        await prisma.resume.update({
            where: {
                id: resumeId
            },
            data: {
                status: 'PROCESSING'
            }
        });
    } catch (error) {
        console.log('error: ');
    };
    const readStream = fs.createReadStream(filePath);
    if (!readStream) return;
    const upload = await uploadToBucket(s3Key, readStream);
    if (!upload) return;
    console.log(`${s3Key} uploaded successfully!!!`)
}, { connection });

worker.on('completed', job => {
    console.log(`${job.id} has completed!`)
})

worker.on('failed', (job, err) => {
    console.log(`${job?.id} has failed with ${err.message}!`)
})


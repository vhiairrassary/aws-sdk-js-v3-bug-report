import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({});
s3Client.send(
    new PutObjectCommand({ Bucket: 'bucket', Key: 'key', Body: 'body' })
);
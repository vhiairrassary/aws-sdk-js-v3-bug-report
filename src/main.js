"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
const s3Client = new client_s3_1.S3Client({});
s3Client.send(new client_s3_1.PutObjectCommand({ Bucket: 'bucket', Key: 'key', Body: 'body' }));
//# sourceMappingURL=main.js.map
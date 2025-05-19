import {Injectable, Logger} from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ManagedUpload } from 'aws-sdk/clients/s3';
import { Express } from 'express';
import * as multer from 'multer';

@Injectable()
export class S3Service {
    private readonly logger = new Logger(S3Service.name);
    private readonly s3: AWS.S3;
    private readonly bucketName: string;

    constructor() {
        const accessKeyId = process.env.YC_S3_KEY_ID;
        const secretAccessKey = process.env.YC_S3_SECRET_KEY;
        this.bucketName = process.env.YC_S3_BUCKET || '';

        if (!accessKeyId || !secretAccessKey || !this.bucketName) {
            throw new Error('Missing S3 configuration in .env file');
        }

        this.s3 = new AWS.S3({
            endpoint: 'https://storage.yandexcloud.net',
            region: 'ru-central1',
            credentials: {
                accessKeyId,
                secretAccessKey
            }
        });
    }

    async uploadFile(file: Express.Multer.File): Promise<string> {
        if (!file?.buffer) {
            throw new Error('Invalid file: No buffer provided');
        }

        console.log('S3 Config:', {
            bucket: process.env.YC_S3_BUCKET,
            endpoint: 'https://storage.yandexcloud.net',
            region: 'ru-central1',
            credentials: {
                accessKeyId: process.env.YC_S3_KEY_ID ? '***REDACTED***' : 'MISSING',
                secretAccessKey: process.env.YC_S3_SECRET_KEY ? '***REDACTED***' : 'MISSING'
            }
        });

        const params: AWS.S3.PutObjectRequest = {
            Bucket: this.bucketName,
            Key: `uploads/${Date.now()}-${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read'
        };

        try {
            const result: ManagedUpload.SendData = await this.s3.upload(params).promise();
            return result.Location;
        } catch (error) {
            throw new Error(`S3 upload failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    async deleteFile(url: string): Promise<void> {
        if (!url) return;

        try {
            let key: string;

            if (url.includes('storage.yandexcloud.net')) {
                const urlObj = new URL(url);
                key = urlObj.pathname.substring(1);
            }
            else if (url.includes('.storage.yandexcloud.net')) {
                const bucketPrefix = this.bucketName + '.';
                const domain = url.split('/')[2];
                if (domain.startsWith(bucketPrefix)) {
                    key = url.split('/').slice(3).join('/');
                } else {
                    throw new Error('Bucket name in URL does not match configured bucket');
                }
            } else {
                throw new Error('Unsupported URL format');
            }

            this.logger.debug(`Deleting file with key: ${key}`);

            await this.s3.deleteObject({
                Bucket: this.bucketName,
                Key: key
            }).promise();

            this.logger.log(`Successfully deleted file: ${url}`);
        } catch (error) {
            this.logger.error('Failed to delete file', {
                originalUrl: url,
                error: error instanceof Error ? error.message : String(error)
            });
            throw error;
        }
    }
    async uploadImage(buffer: Buffer): Promise<string> {
        const params = {
            Bucket: this.bucketName,
            Key: `recipes/${Date.now()}.jpg`,
            Body: buffer,
            ContentType: 'image/jpeg',
            ACL: 'public-read'
        };

        const result = await this.s3.upload(params).promise();
        return result.Location;
    }
}
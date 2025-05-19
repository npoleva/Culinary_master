import 'express';

declare module 'express' {
    interface Request {
        session?: {
            userId: string;
            email: string;
            roles: string[];
        };
    }
}

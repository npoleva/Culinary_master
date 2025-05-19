import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Session from 'supertokens-node/recipe/session';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log("I'm trying to logout 1 !");
      const session = await Session.getSession(req, res);
      console.log("I'm trying to logout 2 !");
      (req as any).session = session;

      console.log("I'm trying to logout 3 !");
      next();
    } catch {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
}

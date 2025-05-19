import {
    Controller, Post, Req, Res, Body, HttpException, HttpStatus, Get
} from '@nestjs/common';
import { Request, Response } from 'express';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Session from 'supertokens-node/recipe/session';
import { PrismaService } from '../prisma.service';
import {RecipeUserId} from "supertokens-node";

@Controller('auth')
export class AuthController {
    constructor(private readonly prisma: PrismaService) {}

    @Post('/register')
    async register(@Body() body: any, @Res() res: Response) {
        const { email, password, name } = body;

        try {
            const result = await EmailPassword.signUp('public',email, password);

            if (result.status !== 'OK') {
                throw new HttpException('Registration failed: ' + result.status, HttpStatus.BAD_REQUEST);
            }

            const superTokensId = result.user.id;

            const user = await this.prisma.user.create({
                data: {
                    id: superTokensId,
                    email,
                    name,
                    passwordHash: password,
                    roles: ['user'],
                },
            });

            await this.prisma.authUser.create({
                data: {
                    superTokensId,
                    userId: user.id,
                },
            });
            return res.redirect('/login');
        } catch (e) {
            throw new HttpException('Registration failed: ' + e.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('/login')
    async login(@Body() body: any, @Req() req: Request, @Res() res: Response) {
        const { email, password } = body;

        try {
            const result = await EmailPassword.signIn('public', email, password);

            console.log('SignIn result:', result);

            if (result.status !== 'OK') {
                throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
            }

            const superTokensId = result.user.id;

            const authUser = await this.prisma.authUser.findUnique({
                where: { superTokensId },
                include: { user: true },
            });

            if (!authUser) {
                throw new HttpException('User not linked', HttpStatus.UNAUTHORIZED);
            }

            const recipeUserId = new RecipeUserId(superTokensId);

            const accessTokenPayload = {
                userId: authUser.user.id,
                roles: authUser.user.roles,
            };

            const session = await Session.createNewSession(
                req,
                res,
                'public',
                recipeUserId,
                accessTokenPayload
            );

            if (session) {
                console.log("Session exists");
            }
            console.log('Set-Cookie headers:', res.getHeader('Set-Cookie'));
            console.log('All response headers:', res.getHeaders());

            // return res.redirect('/');
            res.status(200).json({ success: true });
        } catch (e) {
            console.error('Login error:', e);
            throw new HttpException('Login failed: ' + e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Post('/signout')
    async logout(@Req() req: Request, @Res() res: Response) {
        const session = await Session.getSession(req, res, {
            sessionRequired: false
        });

        if (session) {
            console.log("Session exists");
            await session.revokeSession();
        }
        return res.redirect('/');
    }
}

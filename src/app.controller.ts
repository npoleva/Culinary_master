import {Controller, Get, Render, Req, Res} from '@nestjs/common';
import {ApiExcludeController} from "@nestjs/swagger";
import Session from 'supertokens-node/recipe/session';


@Controller()
@ApiExcludeController()
export class AppController {
    @Get('')
    @Render('culinary-master')
    getCulinaryMasterPage(@Req() req: Request, @Res() res: Response) {
        return {
            title: "Кулинарный мастер",
        };
    }

    @Get('/register')
    @Render('register')
    getRegisterPage() {
        return {};
    }

    @Get('/login')
    @Render('login')
    getLoginPage() {
        return {};
    }
}

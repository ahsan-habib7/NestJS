import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('user')
export class UserController {
    constructor(private readonly appService: AppService) {}  // Inject AppService

    @Get()
    getUser(): string {
        return this.appService.getHello();  // Return output from AppService
    }
}

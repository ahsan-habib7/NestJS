import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AppService } from 'src/app.service';

@Module({
    controllers: [UserController],
    providers: [UserService, AppService]
})
export class UserModule {}

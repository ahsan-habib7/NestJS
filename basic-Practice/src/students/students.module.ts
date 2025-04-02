import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { AppService } from '../app.service';

@Module({
    controllers: [StudentsController],
    providers: [AppService]
})
export class StudentsModule {}

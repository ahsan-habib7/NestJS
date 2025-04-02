import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';
import { AppService } from '../app.service';

@Controller('students')
export class StudentsController {   
constructor(private readonly appService: AppService) {} // Inject AppService

  @Get()
  getHello(): string {
    return this.appService.getHello(); // Call getHello() from AppService
  }
}

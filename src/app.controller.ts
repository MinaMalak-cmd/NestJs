import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//routes
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // its type must be from of its service type

  @Get('/test') // this is called decorator, any decoator applied on what's next only
  getHello(): number {
    return this.appService.getHello2();
  }
}

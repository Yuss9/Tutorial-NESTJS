import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

//manage income request
// like your-domain.com/users we need @Controller("users")

// if we have your-domain.com/products/users we need to have @Controllers('products') and for exmaple @Get('users')
@Controller()
export class AppController {
  //we can take AppService because in the file app.module we add Appservice in providers
  constructor(private readonly appService: AppService) {}

  @Get()
  //add Header return text/html
  @Header('Content-Type', 'text/html')
  getHello(): { name: string } {
    return { name: 'Max' };
  }
}

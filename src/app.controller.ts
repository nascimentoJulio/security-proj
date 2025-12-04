import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './app.repository';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('items')
  getItems(@Query('name') name: string): Promise<Item[]> {
    console.log(name);

    return this.appService.getItems(name);
  }
}

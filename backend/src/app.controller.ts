import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
  ) { }

  @Get('/ping')
  ping(): string {
    return this.appService.ping();
  }

  @Post('/webhook/test')
  webhookSendtest() {
    this.httpService.get('http://localhost:4000/api/webhook/ping').subscribe({
      next: (res) => {
        return res.data
      },
      error: (err) => {
        return err
      }
    })
  }

}

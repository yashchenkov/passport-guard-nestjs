import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/api/users/signup')
  async signup(@Body() body: any): Promise<string> {
    return this.authService.registerUser(body);
  }

  
  @UseGuards(AuthGuard)
  @Post('/api/users/signin')
  async login(@Request() req): Promise<string> {
    return req.user;
  }
}

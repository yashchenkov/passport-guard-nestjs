import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/api/users/signup')
  async signup(@Body() body: any): Promise<string> {
    return this.authService.registerUser(body);
  }

  
  @UseGuards(AuthGuard('local'))
  @Post('/api/users/signin')
  async login(@Request() req) {
    console.log('signin');
    /*this.authService.validateUser(req.body.email, req.body.password);
    return this.authService.login(req.user);*/
    return this.authService.login(req.user);
  }
}

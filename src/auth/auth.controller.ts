import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(): object {
    return this.authService.signup();
  }

  @Post('signin')
  signIn(): object {
    return this.authService.signin();
  }
}

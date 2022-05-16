import {
  Controller,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('authorized')
export class AuthorizedController {
  constructor(private usersService: UsersService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<{user: any }> {
    console.log(req.user)
    const user :any  =await this.usersService.findOne(req.user.username);
    console.log(user)
    return user;
  }
  
}

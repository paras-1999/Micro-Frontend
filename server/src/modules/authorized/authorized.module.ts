import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';

import { AuthorizedController } from './authorized.controller';

@Module({
imports:[UsersModule],
  controllers: [AuthorizedController],
})
export class AuthorizedModule {}

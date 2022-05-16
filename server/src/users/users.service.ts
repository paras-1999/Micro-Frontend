import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
  description: string;
  img:string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'sally@gmail.com',
      password: '123',
      description:"i am good person with lots of power",
      img:"https://www.cheatsheet.com/wp-content/uploads/2022/01/Demon-Slayer-Tanjiro.jpg"
    },
    {
      userId: 2,
      username: 'maria',
      password: '123',
      description:"i am good girl",
      img:"https://www.thetechoutlook.com/wp-content/uploads/2021/10/In-My-Hero-Academia-how-old-is-Deku-or-Izuku-Midoriya.jpg"
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDTO } from './dto';
@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async register(authDTO: AuthDTO) {
    //generate password to hashedpassword
    const hashedPassword = await argon.hash(authDTO.password);
    // insert data to database
    const user = await this.prismaService.user.create({
      data: {
        email: authDTO.email,
        hashedPassword: hashedPassword,
        firstName: authDTO.firstName,
        lastName: authDTO.lastName,
      },
    });
    return user;
  }
}

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Define a "type" of "authentication requets"
export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  firstName?: string;

  lastName?: string;
}

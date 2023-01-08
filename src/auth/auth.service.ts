import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';


interface registerData {
     email: "string", 
     password: "string", 
     firstName: "string", 
     lastName: "string" 
}

@Injectable()
export class AuthService {
    
    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    
    async validateUser(email: string, pass: string): Promise<any> {
        console.log('validateUser');
        const user = await this.usersService.findOne(email);
        console.log(user);
        if (user && pass === user.password) {
            return user;
        }
        return null;
    }

    async registerUser(data: registerData): Promise<any> {
        console.log('registerUser');
        const user = await this.usersService.addOne(data);
        console.log('register' + user);
        if (user) {
            return user;
        }
        return null;
    }

    async login(user: any): Promise<any> {
        console.log('login');
        const payload = { email: user.email, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
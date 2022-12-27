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

    async validateUser(id: number): Promise<any> {
        const user = await this.usersService.findOne(id);
        if (user) {
            this.jwtService.sign({id: id});
            return user;
        }
        return null;
    }

    async registerUser(data: registerData): Promise<any> {
        const user = await this.usersService.addOne(data);
        if (user) {
            this.jwtService.sign(data);
            return user;
        }
        return null;
    }

}
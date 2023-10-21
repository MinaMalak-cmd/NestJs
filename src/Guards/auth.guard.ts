import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../DB/Schemas/user.schema';
import { DBMethods } from '../DB/DBMethods';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _jwtService: JwtService,
    @InjectModel(User.name) private _userModel: Model<User>,
    private _dbMethod: DBMethods,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    if (!authorization) {
      throw new BadRequestException('pleaee lognIn');
    }
    if (!authorization.startsWith('nest__')) {
      throw new BadRequestException('wrong prefix');
    }
    const token = authorization.split('nest__')[1];
    const decodedData = this._jwtService.verify(token, {
      secret: 'test-token',
    });
    if (!decodedData.id) {
      throw new BadRequestException('wrong token');
    }
    const user = await this._dbMethod.findOneDocument(this._userModel, {
      _id: decodedData.id,
    });
    if (!user) {
      throw new BadRequestException('please signup');
    }
    request['user'] = user;
    return request;
  }
}

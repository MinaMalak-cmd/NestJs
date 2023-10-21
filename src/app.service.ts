import { Injectable } from '@nestjs/common';

// controller
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 2';
  }
  getHello2(): number {
    return 6;
  }
}

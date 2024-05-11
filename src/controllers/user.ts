import { BaseController, Controller, Get, Post } from 'utils';

@Controller('/user')
export class UserController extends BaseController {
  @Get('/')
  async get() {
    console.log('Hello World!');
    return 'body';
  }

  @Post('/')
  async post() {
    return 'body';
  }
}

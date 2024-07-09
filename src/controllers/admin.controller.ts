import { Request, Response } from 'express';
import { loginAdmin, registerNewAdmin } from '../services/admin.service';
import { response } from '../services/response.service';
import { handleHttp } from '../utils/error.handle';
import { INTERNAL_ERROR } from '../utils/constants/error.handle';

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewAdmin(body);
    if (responseUser.error) {
      return handleHttp(res, responseUser);
    }
    return response(res, responseUser.data, 'User created successfully', 201);
  } catch (error: unknown) {
    console.error(error);
    return handleHttp(res, INTERNAL_ERROR);
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { username, password } = body;

    const responseUser = await loginAdmin({ username, password });
    if (responseUser.error) {
      return handleHttp(res, responseUser);
    }
    return response(res, responseUser, 'User logged in successfully');
  } catch (error: unknown) {
    console.error(error);
    return handleHttp(res, INTERNAL_ERROR);
  }
};

export { loginCtrl, registerCtrl };

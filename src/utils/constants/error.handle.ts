const ERROR_HANDLE = {
  USER_ALREADY_EXISTS: {
    KEY: 'USER_ALREADY_EXISTS',
    MESSAGE: 'User already exists',
    CODE: 409,
  },
  INVALID_PAYLOAD: {
    KEY: 'INVALID_PAYLOAD',
    MESSAGE: 'Invalid data structure',
    CODE: 400,
  },
  USER_NOT_FOUND: {
    KEY: 'USER_NOT_FOUND',
    MESSAGE: 'User not found',
    CODE: 404,
  },
  NOT_FOUND: {
    KEY: 'NOT_FOUND',
    MESSAGE: 'Resource not found',
  },
  INCORRECT_PASSWORD: {
    KEY: 'INCORRECT_PASSWORD',
    MESSAGE: 'Invalid credentials',
    CODE: 403,
  },
  INVALID_TOKEN: {
    KEY: 'INVALID_TOKEN',
    MESSAGE: 'Invalid token',
    CODE: 401,
  },
  INTERNAL_SERVER_ERROR: {
    KEY: 'INTERNAL_SERVER_ERROR',
    MESSAGE: 'Internal server error',
    CODE: 500,
  },
};

const INTERNAL_ERROR = { error: ERROR_HANDLE.INTERNAL_SERVER_ERROR.KEY };

export { ERROR_HANDLE, INTERNAL_ERROR };

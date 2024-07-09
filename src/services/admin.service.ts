// services/admin.service.ts
import { IAdmin } from '../interfaces/admin.interface';
import Admin from '../models/admin.model';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';
import { ERROR_HANDLE } from '../utils/constants/error.handle';
import { validateAdmin, validateLogin } from '../schemas/admin.schema';

const {
  USER_ALREADY_EXISTS,
  INVALID_PAYLOAD,
  USER_NOT_FOUND,
  INCORRECT_PASSWORD,
} = ERROR_HANDLE;

const registerNewAdmin = async (newAdmin: IAdmin) => {
  const validatePayload = validateAdmin(newAdmin);
  if (!validatePayload.success) {
    return {
      error: INVALID_PAYLOAD.KEY,
      message: validatePayload.error.message,
    };
  }

  const exists = await Admin.findOne({ username: newAdmin.username }).exec();
  if (exists) {
    return {
      error: USER_ALREADY_EXISTS.KEY,
    };
  }

  const passwordHash = await encrypt(newAdmin.password);
  const admin = new Admin({ ...newAdmin, password: passwordHash });
  await admin.save();

  return {
    data: admin,
  };
};

const loginAdmin = async ({ username, password }: IAdmin) => {
  const validatePayload = validateLogin({ username, password });
  if (!validatePayload.success) {
    return {
      error: INVALID_PAYLOAD.KEY,
      message: validatePayload.error.message,
    };
  }

  const admin = await Admin.findOne({ username }).exec();
  if (!admin) {
    return {
      error: USER_NOT_FOUND.KEY,
    };
  }

  const isCorrect = await verified(password, admin.password);
  if (!isCorrect) {
    return {
      error: INCORRECT_PASSWORD.KEY,
    };
  }

  const token = generateToken(admin.id);

  const { password: _, ...adminWithoutPassword } = admin.toObject();

  return { token, admin: adminWithoutPassword };
};

export { registerNewAdmin, loginAdmin };

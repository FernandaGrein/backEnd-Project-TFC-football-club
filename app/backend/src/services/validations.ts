import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import InvalidFields from '../errorsHandler/invalidFieldsError';

const { JWT_SECRET } = process.env;

const tokenValidation = (token: string): JwtPayload | void => {
  try {
    const payload = jwt.verify(token, JWT_SECRET as Secret) as JwtPayload;
    return payload;
  } catch (error) {
    throw new InvalidFields('Token must be a valid token');
  }
};

export default tokenValidation;

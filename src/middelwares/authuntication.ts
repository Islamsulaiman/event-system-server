import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

const compareUserData = async (userEmail: string, userPassword: string, DBUser: any) :
Promise<boolean> => {
  // check if email match
  if (userEmail !== DBUser.email) return false;

  // check if password match Db password
  const result = await bcrypt.compare(userPassword, DBUser.password); // return bool
  return result;
};

type IokenPayload = {
  id: string
};

// eslint-disable-next-line max-len
const generateJWT = (payload: IokenPayload) => jwt.sign(payload, process.env.JWT_SECRET as string);

export { compareUserData, generateJWT };

import { Student } from '../models';

// data types
type NewStudent = {
  fullName: String;
  password: String
  email: String
};

// 1. create new speaker
const create = (data: NewStudent) => Student.create(data);

export { create };

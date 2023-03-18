import { Student } from '../models';

// data types
type NewStudent = {
  fullName: String;
  password: String
  email: String
};

// 1. create new speaker
const create = (data: NewStudent) => Student.create(data);

/// 2. get all students
const getAll = () => Student.find();

// 3. get one student
const getOne = (data: string) => Student.findOne({ _id: data });

export { create, getAll, getOne };

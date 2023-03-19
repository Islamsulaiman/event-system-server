import { Student } from '../models';

// data types
type NewStudent = {
  fullName: String;
  password: String
  email: String
};

type UpdateStudent = {
  email? : string,
  fullName?: string
};

// 1. create new speaker
const create = (data: NewStudent) => Student.create(data);

/// 2. get all students
const getAll = () => Student.find().exec();

// 3. get one student
const getOne = (data: string) => Student.findOne({ _id: data });

// 4. update student
const updateOne = (email: string, data: UpdateStudent) => Student.updateOne({ email }, data);

// 5. delete student
const deleteOne = (email: any) => Student.deleteOne({ email });

export {
  create, getAll, getOne, updateOne, deleteOne,
};

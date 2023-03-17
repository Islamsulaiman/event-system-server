import mongoose from 'mongoose';

const { Schema } = mongoose;

interface StudentType {
  fullName: string,
  password: string,
  email: string
}

const studentSchema = new Schema<StudentType>(
  {

    fullName: {
      type: String,
      minlength: 6,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        // eslint-disable-next-line no-param-reassign
        delete ret.password;
      },
    },
  },
);

const Student = mongoose.model('student', studentSchema);

export default Student;

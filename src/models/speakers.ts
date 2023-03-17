import mongoose from 'mongoose';

const { Schema } = mongoose;

const speakersSchema = new Schema(
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

const Speakers = mongoose.model('Speakr', speakersSchema);

export default Speakers;

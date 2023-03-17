import { Speakers } from '../models';

// data types
type NewSpeaker = {
  fullName: string;
  password: string
  email: string
};

// 1. create new speaker
const create = (data: NewSpeaker) => Speakers.create(data);

export { create };

import { Event } from '../models';

// data types
interface EventType {
  title: string,
  eventDate: Date,
  mainSpeaker: string,
}

// 1 create new event
const create = (data: EventType) => Event.create(data);

export { create };

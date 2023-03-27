import mongoose from 'mongoose';

const { Schema } = mongoose;

interface EventType {
  title: string,
  eventDate: Date,
  mainSpeaker: string,
}

const eventSchema = new Schema<EventType>(
  {

    title: {
      type: String,
      minlength: 6,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    mainSpeaker: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model('event', eventSchema);

export default Event;

import mongoose from "mongoose";
const { Schema } = mongoose;

const Message = new Schema(
  {
    name: {
      type: String,
    },

    tel: {
      type: Number,
    },

    email: {
      type: String,
    },

    textMessage: {
      type: String,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Message", Message);

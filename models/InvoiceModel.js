import mongoose from "mongoose";
const { Schema } = mongoose;

const Invoice = new Schema(
  {
    invoiceNumber: {
      required: true,
      type: Number,
    },

    invoiceValue: {
      type: Number,
    },

    invoiceCompany: {
      type: String,
    },

    methodePaid: {
      type: String,
    },
    isPaid: {
      type: String,
    },
    invoiceDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Invoice", Invoice);

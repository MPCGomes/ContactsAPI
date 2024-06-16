import mongoose, { Document, Schema } from "mongoose";

export interface Phone {
  number: string;
  label:
    | "None"
    | "Mobile"
    | "Work"
    | "Home"
    | "Main"
    | "Work Fax"
    | "Home Fax"
    | "Pager"
    | "Other"
    | "Custom";
}

export interface Email {
  address: string;
  label: "None" | "Home" | "Work" | "Other" | "Custom";
}

export interface SignificantDate {
  date: string;
  label: "None" | "Birthday" | "Anniversary" | "Other" | "Custom";
}

export interface ContactDocument extends Document {
  picture?: string;
  firstName: string;
  lastName?: string;
  company?: string;
  phone: Phone[];
  email?: Email[];
  significanteDate?: SignificantDate[];
}

const contactSchema: Schema = new Schema({
  picture: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String },
  company: { type: String },
  phone: [
    {
      number: { type: String, required: true },
      label: {
        type: String,
        enum: [
          "None",
          "Mobile",
          "Work",
          "Home",
          "Main",
          "Work Fax",
          "Home Fax",
          "Pager",
          "Other",
          "Custom",
        ],
        default: "Mobile",
      },
    },
  ],
  email: [
    {
      address: { type: String },
      label: {
        type: String,
        enum: ["None", "Home", "Work", "Other", "Custom"],
        default: "Home",
      },
    },
  ],
  significantDate: [
    {
      date: { type: String },
      label: {
        type: String,
        enum: ["None", "Birthday", "Anniversary", "Other", "Custom"],
      },
    },
  ],
});

export const Contact = mongoose.model<ContactDocument>(
  "Contact",
  contactSchema
);

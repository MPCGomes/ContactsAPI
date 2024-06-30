import mongoose, { Document, Schema } from "mongoose";

export interface Phone {
  value: string;
  type: string;
}

export interface Email {
  value: string;
  type: string;
}

export interface Event {
  date: string;
  type: string;
}

export interface Address {
  streetAddress: string;
  city: string;
  region: string;
  country: string;
  postalCode: string;
  type: string;
}

export interface URL {
  value: string;
  type: string;
}

export interface Relationship {
  person: string;
  type: string;
}

export interface IMClient {
  protocol: string;
  username: string;
}

export interface Biography {
  value: string;
}

export interface ContactDocument extends Document {
  photoUrl?: string;
  givenName: string;
  middleName?: string;
  familyName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  phoneticGivenName?: string;
  phoneticMiddleName?: string;
  phoneticFamilyName?: string;
  nickname?: string;
  fileAs?: string;
  organizations?: {
    name: string;
    department?: string;
    title?: string;
  }[];
  addresses: Address[];
  phoneNumbers: Phone[];
  emailAddresses: Email[];
  events: Event[];
  urls: URL[];
  relations: Relationship[];
  imClients: IMClient[];
  userDefined?: { key: string; value: string }[];
  biographies: Biography[];
  occupations?: {
    title: string;
    company: string;
  }[];
  memberships?: {
    type: string;
    domain: string;
  }[];
}

const contactSchema: Schema = new Schema({
  photoUrl: { type: String },
  givenName: { type: String, required: true },
  middleName: { type: String },
  familyName: { type: String },
  honorificPrefix: { type: String },
  honorificSuffix: { type: String },
  phoneticGivenName: { type: String },
  phoneticMiddleName: { type: String },
  phoneticFamilyName: { type: String },
  nickname: { type: String },
  fileAs: { type: String },
  organizations: [
    {
      name: { type: String },
      department: { type: String },
      title: { type: String },
    },
  ],
  addresses: [
    {
      streetAddress: { type: String },
      city: { type: String },
      region: { type: String },
      country: { type: String },
      postalCode: { type: String },
      type: { type: String },
    },
  ],
  phoneNumbers: [
    {
      value: { type: String },
      type: { type: String },
    },
  ],
  emailAddresses: [
    {
      value: { type: String },
      type: { type: String },
    },
  ],
  events: [
    {
      date: { type: String },
      type: { type: String },
    },
  ],
  urls: [
    {
      value: { type: String },
      type: { type: String },
    },
  ],
  relations: [
    {
      person: { type: String },
      type: { type: String },
    },
  ],
  imClients: [
    {
      protocol: { type: String },
      username: { type: String },
    },
  ],
  userDefined: [
    {
      key: { type: String },
      value: { type: String },
    },
  ],
  biographies: [
    {
      value: { type: String },
    },
  ],
  occupations: [
    {
      title: { type: String },
      company: { type: String },
    },
  ],
  memberships: [
    {
      type: { type: String },
      domain: { type: String },
    },
  ],
});

export const Contact = mongoose.model<ContactDocument>(
  "Contact",
  contactSchema
);

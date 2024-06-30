export interface Organization {
  name: string;
  department?: string;
  title?: string;
}

export interface Address {
  streetAddress: string;
  city: string;
  region: string;
  country: string;
  postalCode: string;
  type: string;
}

export interface PhoneNumber {
  value: string;
  type: string;
}

export interface EmailAddress {
  value: string;
  type: string;
}

export interface Event {
  date: string;
  type: string;
}

export interface URL {
  value: string;
  type: string;
}

export interface Relation {
  person: string;
  type: string;
}

export interface IMClient {
  protocol: string;
  username: string;
}

export interface UserDefined {
  key: string;
  value: string;
}

export interface Biography {
  value: string;
}

export interface Occupation {
  title: string;
  company: string;
}

export interface Membership {
  type: string;
  domain: string;
}

export interface ContactDTO {
  givenName: string;
  familyName?: string;
  middleName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  phoneticGivenName?: string;
  phoneticMiddleName?: string;
  phoneticFamilyName?: string;
  nickname?: string;
  fileAs?: string;
  organizations?: Organization[];
  addresses?: Address[];
  phoneNumbers?: PhoneNumber[];
  emailAddresses?: EmailAddress[];
  events?: Event[];
  urls?: URL[];
  relations?: Relation[];
  imClients?: IMClient[];
  userDefined?: UserDefined[];
  biographies?: Biography[];
  occupations?: Occupation[];
  memberships?: Membership[];
}

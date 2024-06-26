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
  organizations?: {
    name: string;
    department?: string;
    title?: string;
  }[];
  addresses?: {
    streetAddress: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
    type: string;
  }[];
  phoneNumbers?: {
    value: string;
    type: string;
  }[];
  emailAddresses?: {
    value: string;
    type: string;
  }[];
  events?: {
    date: string;
    type: string;
  }[];
  urls?: {
    value: string;
    type: string;
  }[];
  relations?: {
    person: string;
    type: string;
  }[];
  imClients?: {
    protocol: string;
    username: string;
  }[];
  userDefined?: { key: string; value: string }[];
  biographies?: {
    value: string;
  }[];
  occupations?: {
    title: string;
    company: string;
  }[];
  memberships?: {
    type: string;
    domain: string;
  }[];
}
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
  label:
    | "None"
    | "Home"
    | "Work"
    | "Other"
    | "Custom";
}

export interface SignificantDate {
  date: string;
  label:
    | "None"
    | "Birthday"
    | "Anniversary"
    | "Other"
    | "Custom";
}

export interface Contact {
  id: string;
  picture?: string;
  firstName: string;
  lastName?: string;
  company?: string;
  phone: Phone[];
  email?: Email[];
  significanteDate?: SignificantDate[];
}

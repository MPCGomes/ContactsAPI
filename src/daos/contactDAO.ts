import { Contact, ContactDocument } from "../models/contact";
import { BaseDAO } from "./baseDAO";

class ContactDAO extends BaseDAO<ContactDocument> {
  constructor() {
    super(Contact);
  }
}

export const contactDAO = new ContactDAO();

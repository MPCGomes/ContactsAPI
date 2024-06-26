import { Contact } from "../../models/contact";
import { ContactDTO } from "../../dtos/v1/contactDTO";

export const createContact = async (contactDTO: ContactDTO) => {
  const contact = new Contact(contactDTO);
  return await contact.save();
};

export const getContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (id: string) => {
  return await Contact.findById(id);
};

export const updateContact = async (id: string, contactDTO: ContactDTO) => {
  return await Contact.findByIdAndUpdate(id, contactDTO, { new: true });
};

export const deleteContact = async (id: string) => {
  return await Contact.findByIdAndDelete(id);
};

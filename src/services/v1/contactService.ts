import * as contactRepository from "../../repositories/contactRepository";
import { ContactDTO } from "../../dtos/v1/contactDTO";

export const getContacts = async () => {
  return await contactRepository.getContactsV1();
};

export const getContactById = async (id: string) => {
  return await contactRepository.getContactByIdV1(id);
};

export const createContact = async (contactDTO: ContactDTO) => {
  return await contactRepository.createContactV1(contactDTO);
};

export const updateContact = async (id: string, contactDTO: ContactDTO) => {
  return await contactRepository.updateContactV1(id, contactDTO);
};

export const deleteContact = async (id: string) => {
  return await contactRepository.deleteContactV1(id);
};

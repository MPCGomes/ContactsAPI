import * as contactRepository from "../../repositories/contactRepository";
import { ContactDTO } from "../../dtos/v2/contactDTO";

export const getContacts = async () => {
  return await contactRepository.getContactsV2();
};

export const getContactById = async (id: string) => {
  return await contactRepository.getContactByIdV2(id);
};

export const createContact = async (contactDTO: ContactDTO) => {
  return await contactRepository.createContactV2(contactDTO);
};

export const updateContact = async (id: string, contactDTO: ContactDTO) => {
  return await contactRepository.updateContactV2(id, contactDTO);
};

export const deleteContact = async (id: string) => {
  return await contactRepository.deleteContactV2(id);
};

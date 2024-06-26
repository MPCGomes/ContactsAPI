import * as v1DAO from "../daos/v1/contactDAO";
import * as v2DAO from "../daos/v2/contactDAO";
import { ContactDTO } from "../dtos/v1/contactDTO";

export const createContactV1 = async (contactDTO: ContactDTO) => {
  return await v1DAO.createContact(contactDTO);
};

export const getContactsV1 = async () => {
  return await v1DAO.getContacts();
};

export const getContactByIdV1 = async (id: string) => {
  return await v1DAO.getContactById(id);
};

export const updateContactV1 = async (id: string, contactDTO: ContactDTO) => {
  return await v1DAO.updateContact(id, contactDTO);
};

export const deleteContactV1 = async (id: string) => {
  return await v1DAO.deleteContact(id);
};

export const createContactV2 = async (contactDTO: ContactDTO) => {
  return await v2DAO.createContact(contactDTO);
};

export const getContactsV2 = async () => {
  return await v2DAO.getContacts();
};

export const getContactByIdV2 = async (id: string) => {
  return await v2DAO.getContactById(id);
};

export const updateContactV2 = async (id: string, contactDTO: ContactDTO) => {
  return await v2DAO.updateContact(id, contactDTO);
};

export const deleteContactV2 = async (id: string) => {
  return await v2DAO.deleteContact(id);
};

import * as contactRepository from "../../repositories/contactRepository";
import { ContactDTO } from "../../dtos/v1/contactDTO";
import logger from "../../utils/logger";

export const getContacts = async () => {
  try {
    return await contactRepository.getContactsV1();
  } catch (error) {
    logger.error("Error getting contacts from repository", error);
    throw error;
  }
};

export const getContactById = async (id: string) => {
  try {
    return await contactRepository.getContactByIdV1(id);
  } catch (error) {
    logger.error(`Error getting contact by ID: ${id} from repository`, error);
    throw error;
  }
};

export const createContact = async (contactDTO: ContactDTO) => {
  try {
    return await contactRepository.createContactV1(contactDTO);
  } catch (error) {
    logger.error("Error creating contact in repository", error);
    throw error;
  }
};

export const updateContact = async (id: string, contactDTO: ContactDTO) => {
  try {
    return await contactRepository.updateContactV1(id, contactDTO);
  } catch (error) {
    logger.error(`Error updating contact with ID: ${id} in repository`, error);
    throw error;
  }
};

export const deleteContact = async (id: string) => {
  try {
    return await contactRepository.deleteContactV1(id);
  } catch (error) {
    logger.error(`Error deleting contact with ID: ${id} in repository`, error);
    throw error;
  }
};

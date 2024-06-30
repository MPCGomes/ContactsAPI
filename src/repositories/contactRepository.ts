import { contactDAO } from "../daos/contactDAO";
import { ContactDTO } from "../dtos/contactDTO";
import { Contact, ContactDocument } from "../models/contact";
import logger from "../utils/logger";

export const createContact = async (contactDTO: ContactDTO) => {
  try {
    const contact = new Contact(contactDTO) as ContactDocument;
    return await contactDAO.create(contact);
  } catch (error) {
    logger.error("Error creating contact", error);
    throw error;
  }
};

export const getContacts = async () => {
  try {
    return await contactDAO.findAll();
  } catch (error) {
    logger.error("Error creating contact", error);
    throw error;
  }
};

export const getContactById = async (id: string) => {
  try {
    return await contactDAO.findById(id);
  } catch (error) {
    logger.error(`Error getting contact by ID: ${id}`, error);
    throw error;
  }
};

export const updateContact = async (id: string, contactDTO: ContactDTO) => {
  try {
    return await contactDAO.updateById(id, contactDTO);
  } catch (error) {
    logger.error(`Error updating contact with ID: ${id}`, error);
    throw error;
  }
};

export const deleteContact = async (id: string) => {
  try {
    return await contactDAO.deleteById(id);
  } catch (error) {
    logger.error(`Error deleting contact with ID: ${id}`, error);
    throw error;
  }
};

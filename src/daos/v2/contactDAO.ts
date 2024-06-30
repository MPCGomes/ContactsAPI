import { Contact } from "../../models/contact";
import { ContactDTO } from "../../dtos/v2/contactDTO";
import logger from "../../utils/logger";

export const createContact = async (contactDTO: ContactDTO) => {
  try {
    const contact = new Contact(contactDTO);
    return await contact.save();
  } catch (error) {
    logger.error("Error creating contact in database", error);
    throw error;
  }
};

export const getContacts = async () => {
  try {
    return await Contact.find();
  } catch (error) {
    logger.error("Error getting contacts from database", error);
    throw error;
  }
};

export const getContactById = async (id: string) => {
  try {
    return await Contact.findById(id);
  } catch (error) {
    logger.error(`Error getting contact by ID: ${id} from database`, error);
    throw error;
  }
};

export const updateContact = async (id: string, contactDTO: ContactDTO) => {
  try {
    return await Contact.findByIdAndUpdate(id, contactDTO, { new: true });
  } catch (error) {
    logger.error(`Error updating contact with ID: ${id} in database`, error);
    throw error;
  }
};

export const deleteContact = async (id: string) => {
  try {
    return await Contact.findByIdAndDelete(id);
  } catch (error) {
    logger.error(`Error deleting contact with ID: ${id} from database`, error);
    throw error;
  }
};

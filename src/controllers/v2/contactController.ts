import { Request, Response } from "express";
import * as contactService from "../../services/v2/contactService";
import { ContactDTO } from "../../dtos/v2/contactDTO";
import logger from "../../utils/logger";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await contactService.getContacts();
    res.json(contacts);
  } catch (error) {
    logger.error("Failed to get contacts", error);
    res.status(500).send(error);
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const contact = await contactService.getContactById(req.params.contactId);
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.json(contact);
  } catch (error) {
    logger.error(`Failed to get contact by ID: ${req.params.contactId}`, error);
    res.status(500).send(error);
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const contactDTO: ContactDTO = req.body;
    const newContact = await contactService.createContact(contactDTO);
    res.status(201).json(newContact);
  } catch (error) {
    logger.error("Failed to create contact", error);
    res.status(500).send(error);
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const contactDTO: ContactDTO = req.body;
    const contact = await contactService.updateContact(
      req.params.contactId,
      contactDTO
    );
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.json(contact);
  } catch (error) {
    logger.error(
      `Failed to update contact with ID: ${req.params.contactId}`,
      error
    );
    res.status(500).send(error);
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const contact = await contactService.deleteContact(req.params.contactId);
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.status(204).send();
  } catch (error) {
    logger.error(
      `Failed to delete contact with ID: ${req.params.contactId}`,
      error
    );
    res.status(500).send(error);
  }
};

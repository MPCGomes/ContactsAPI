import { Request, Response } from "express";
import * as contactService from "../../services/v2/contactService";
import { ContactDTO } from "../../dtos/v2/contactDTO";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await contactService.getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const contact = await contactService.getContactById(
      req.params.contactId
    );
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.json(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const contactDTO: ContactDTO = req.body;
    const newContact = await contactService.createContact(contactDTO);
    res.status(201).json(newContact);
  } catch (error) {
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
    res.status(500).send(error);
  }
};

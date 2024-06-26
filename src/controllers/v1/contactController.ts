import { Request, Response } from "express";
import * as contactRepository from "../../repositories/contactRepository";
import { ContactDTO } from "../../dtos/v1/contactDTO";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await contactRepository.getContactsV1();
    res.json(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const contact = await contactRepository.getContactByIdV1(
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
    const newContact = await contactRepository.createContactV1(contactDTO);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const contactDTO: ContactDTO = req.body;
    const contact = await contactRepository.updateContactV1(
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
    const contact = await contactRepository.deleteContactV1(
      req.params.contactId
    );
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

import { Request, Response } from "express";
import { Contact } from "../models/contact";

let contacts: Contact[] = [];

export const getContacts = (req: Request, res: Response) => {
  res.json(contacts);
};

export const getContactById = (req: Request, res: Response) => {
  const contact = contacts.find((c) => c.id === req.params.contactId);
  if (!contact) {
    return res.status(404).send("Contact not found");
  }
  res.json(contact);
};

export const createContact = (req: Request, res: Response) => {
  const newContact: Contact = {
    id: `${contacts.length + 1}`,
    ...req.body,
  };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

export const updateContact = (req: Request, res: Response) => {
  const contactIndex = contacts.findIndex((c) => c.id === req.params.contactId);
  if (contactIndex === -1) {
    return res.status(404).send("Contact not found");
  }
  contacts[contactIndex] = { ...contacts[contactIndex], ...req.body };
  res.json(contacts[contactIndex]);
};

export const deleteContact = (req: Request, res: Response) => {
  contacts = contacts.filter((c) => c.id !== req.params.contactId);
  res.status(204).send();
};

import { Request, Response } from "express";
import { Contact } from "../models/contact";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
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
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      { new: true }
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
    const contact = await Contact.findByIdAndDelete(req.params.contactId);
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

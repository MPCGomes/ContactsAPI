"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.createContact = exports.getContactById = exports.getContacts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contact_1 = require("../models/contact");
const { ObjectId } = mongoose_1.default.Types;
const getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contact_1.Contact.find();
        res.json(contacts);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getContacts = getContacts;
const getContactById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_1.Contact.findById(new ObjectId(req.params.contactId));
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        res.json(contact);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getContactById = getContactById;
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newContact = new contact_1.Contact(req.body);
        yield newContact.save();
        res.status(201).json(newContact);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createContact = createContact;
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_1.Contact.findByIdAndUpdate(new ObjectId(req.params.contactId), req.body, { new: true });
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        res.json(contact);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateContact = updateContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_1.Contact.findByIdAndDelete(new ObjectId(req.params.contactId));
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteContact = deleteContact;

import { Router } from "express";
import {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../../controllers/v2/contactController";

const router = Router();

router.get("/", getContacts);
router.get("/:contactId", getContactById);
router.post("/", createContact);
router.patch("/:contactId", updateContact);
router.delete("/:contactId", deleteContact);

export default router;

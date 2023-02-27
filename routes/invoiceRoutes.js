import express from "express";

import Protect from "../middleware/auth.js";
const router = express.Router();
import {
  createInvoice,
  deteleInvoice,
  getInvoice,
  getInvoices,
  updateInvoice,
} from "../controllers/InvoiceController.js";

//get all users
router.get("/", getInvoices);
//get a user
router.get("/:id", getInvoice);
// add new  user
router.post("/addInvoice", createInvoice);
//update user
router.put("/:id", updateInvoice);
//delete user
router.delete("/:id", deteleInvoice);

export default router;

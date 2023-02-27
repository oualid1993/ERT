import express from "express";

import Protect from "../middleware/auth.js";
const router = express.Router();
import {
  getMessage,
  getMessageById,
  createMessage,
  deteleMessage,
  updateMessage,
} from "../controllers/MessageController.js";

//get all  "/api/message
router.get("/", getMessage);
//get a  "/api/message
router.get("/:id", getMessageById);
// add new   "/api/message/addMessage
router.post("/addMessage", createMessage);
//update  "/api/message
router.put("/:id", updateMessage);
//delete  "/api/message
router.delete("/:id", deteleMessage);

export default router;

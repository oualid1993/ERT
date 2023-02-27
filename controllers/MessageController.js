import Message from "../models/MessageModel.js";
import asyncHandler from "express-async-handler";

//@decs Get users
//@roues Get api/users
//access Private
const getMessage = asyncHandler(async (req, res) => {
  const total = await Message.countDocuments({});
  let messages = await Message.find({}).select({ isRead: false });

  if (messages) {
    res.status(200).json(messages);
  } else {
    res.status(200).json({
      message: "pas de message ",
    });
  }
});

//@decs Get one user
//@roues Get api/users/:id
//access Private

const getMessageById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get Task id ${req.params.id}` });
});

//@decs craete user
//@roues POST api/users/addUser
//access Private

const createMessage = asyncHandler(async (req, res) => {
  const { email, tel, name, textMessage } = req.body;

  const message = await Message.create({
    email,
    tel,
    name,
    textMessage,
  });

  if (message) res.status(200).json({ message: "message envoyee ajouter " });
  else {
    res.status(400).json({
      message: "invalid  data",
    });
  }
});

//@decs delete user
//@roues POST api/users/deeteUser
//access Private
const deteleMessage = asyncHandler(async (req, res) => {});

//@decs update user
//@roues POST api/users/deeteUser
//access Private
const updateMessage = asyncHandler(async (req, res) => {});

export {
  getMessage,
  getMessageById,
  createMessage,
  deteleMessage,
  updateMessage,
};

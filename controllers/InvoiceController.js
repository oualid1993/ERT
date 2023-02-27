import Invoice from "../models/InvoiceModel.js";
import asyncHandler from "express-async-handler";

//@decs Get users
//@roues Get api/users
//access Private
const getInvoices = asyncHandler(async (req, res) => {
  const PAGE_SIZE = 10;
  const page = parseInt(req.query.page || 0);
  console.log(page);
  const total = await Invoice.countDocuments({});
  let invoices = await Invoice.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page)
    .sort({ invoiceDate: -1 });

  if (invoices) {
    res.status(200).json(invoices);
  } else {
    res.status(200).json({
      message: "pas de facture ",
    });
  }
});

//@decs Get one user
//@roues Get api/users/:id
//access Private

const getInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get Task id ${req.params.id}` });
});

//@decs update user
//@roues POST api/users/updateUser
//access Private

const updateInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update Task id ${req.params.id}` });
});

//@decs craete user
//@roues POST api/users/addUser
//access Private

const createInvoice = asyncHandler(async (req, res) => {
  const {
    invoiceNumber,
    invoiceValue,
    invoiceCompany,
    methodePaid,
    isPaid,
    invoiceDate,
  } = req.body;

  const invoice = await Invoice.create({
    invoiceNumber,
    invoiceValue,
    invoiceCompany,
    methodePaid,
    isPaid,
    invoiceDate,
  });

  if (invoice) res.status(200).json({ message: " la facture est ajouter " });
  else {
    res.status(400).json({
      message: "invalid user data",
    });
  }
});

//@decs delete user
//@roues POST api/users/deeteUser
//access Private
const deteleInvoice = asyncHandler(async (req, res) => {
  Invoice.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).json({ message: " la facture est suprime " });
    })
    .catch((err) => {
      console.log(err);
    });
});

export { getInvoice, getInvoices, updateInvoice, createInvoice, deteleInvoice };

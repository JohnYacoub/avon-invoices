const express = require("express");
const invoices = express.Router();
const InvoiceController = require("../../controllers/InvoiceController");


invoices.get("/invoice/all", InvoiceController.getAllInvoices);
invoices.post("/upload-invoice", InvoiceController.upload);
module.exports = invoices;
// const db = require("../../models");
const {
  addPDF,
} = require('../services/uploadService');
const {
  getInvoices
} = require('../services/invoiceServices')
exports.upload = async (req, res, next) => {

  const {
    tempFilePath
  } = req.files.filename;
  console.log(tempFilePath)

  try {
    const response = await addPDF(tempFilePath)
    console.log('final respone', response)
    if (!response) {
      res.status(403).json({
        message: "something went south"
      })
    } else {
      res.status(200).json({
        id: response.id,
        invoice_Number: response.invoice_Number,
        balance_due: response.balance_due,
        company_id: response.company_id,
        message: "Invoice details has been captured"
      })
    }
  } catch (error) {
    console.log(error)
  }

}

exports.getAllInvoices = async (req, res, next) => {

  try {
    const response = await getInvoices()

    if (!response) {
      res.status(403).json({
        message: "no available invoices"
      })
    } else {
      res.status(200).json({
        invoices: response,
        message: "Total records"
      })
    }
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
}
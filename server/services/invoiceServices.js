const db = require('../models');

exports.getInvoices = async () => {
  const response = await db.Invoice.findAll({
    order: ["createdAt"]
  })

  return response
}
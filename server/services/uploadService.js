const PDFParser = require("pdf-parse");
const fs = require('fs');
const db = require('../models');


exports.addPDF = async (files) => {

  //logic to extract data from the pdf lib and 
  //add it to mysql

  let dataBuffer = await fs.readFileSync(files);
  // let extractedData = await PDFParser(dataBuffer);


  let extractedData = await new Promise(async (resolve, reject) => {
    const {
      text
    } = await PDFParser(dataBuffer);


    const noLineText = await text.replace(/\n/g, " ")
    console.log(noLineText)
    let ra_regExp_match = /INVOICE #\s{2}(\d{8})/;
    let rentalDate_regExp_match = /RENTAL DATE\s(.*?)RENTAL TIME/;
    let returnDate_regExp_match = /RETURN DATE\s(.*?)RETURN TIME/;
    let balanceDue_regExp_match = /BALANCE DUE?.(?:[$]|[−$])(.*)DEPOSITS/;
    // let balanceDue_regExp_match = /BALANCE DUE.?[\d{4}](.*?)DEPOSITS/;
    let companyId_regExp_match = /INFO:\s(\d{6} |\D{15})/;
    // let companyId_regExp_match = /COMPANY INFO:\s(.*?)BRAND/;
    let vehicleNumber_regExp_match = /(?<=VEHICLE NO.)(.*?\d{6})/;


    resolve({
      invoice_Number: ra_regExp_match.exec(noLineText)[1].trim(),
      rental_date: rentalDate_regExp_match.exec(noLineText)[1].trim(),
      return_date: returnDate_regExp_match.exec(noLineText)[1].trim(),
      balance_due: balanceDue_regExp_match.exec(noLineText)[1].trim(),
      company_id: companyId_regExp_match.exec(noLineText)[1].trim(),
      vehicle_number: vehicleNumber_regExp_match.exec(noLineText)[0],
    })



  });
  const record = await db.Invoice.create(extractedData);

  return record






  //   if(extractedData.text === /(?<=RA \/ INVOICE #\s{5}).*$/gm){
  // let ra = 
  //     return {RA:}
  //   }
  // check if the ra number exists in table, update that record
  //incase no ra number found create new record.



}
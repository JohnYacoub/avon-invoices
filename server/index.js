const express = require("express");
const app = express();
const db = require("./models/");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3003;
const morgan = require("morgan");
const helmet = require("helmet");
const fileupload = require('express-fileupload')

// import routes
const Invoices = require("./routes/Invoice/invoiceRoute")
// $$$$$$$$
// const fs = require("fs");
// const PDFParser = require("pdf-parse");
// const {
//   resolve
// } = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(morgan("common"));
app.use(helmet());
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
);

app.use(fileupload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  debug: true
}));



app.get("/", (req, res) => {

  res.status(200).json({
    message: "PDF API READY FOR USE"
  })
});

app.use("/api/invoices", Invoices)


db.sequelize.sync({
  // logging: (...msg) => console.log(msg),
  force: false,
}).then(() => {

  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  })
}).catch(err => {
  console.log(err);
})
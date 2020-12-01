import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
const InvoicesList = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/api/invoices/invoice/all");
      console.log(request.data.invoices);
      setInvoices(request.data.invoices);
    }
    fetchData();
  }, ["/api/invoices/invoice/all"]);

  return (
    <>
      <Grid item container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h5">
            Total records : {invoices.length}
          </Typography>
        </Grid>
        {invoices.map((invoice) => {
          return (
            <Grid item xs={6} style={{ marginTop: 10 }}>
              <Paper
                style={{
                  margin: "0 auto",
                  maxWidth: 500,
                  padding: 10,
                }}
              >
                <Box display="flex">
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginRight: 20 }}
                  >
                    Invoice Number
                  </Typography>
                  <Typography variant="subtitle1">
                    {invoice.invoice_Number}
                  </Typography>
                </Box>

                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <strong>Rental Date :</strong> {invoice.rental_date}
                  </li>
                  <li>
                    <strong>Return Date : </strong>
                    {invoice.return_date}
                  </li>
                  <li>
                    <strong>Balance Due:</strong>
                    {invoice.balance_due}
                  </li>
                  <li>
                    <strong>Vehicle Number: </strong>
                    {invoice.vehicle_number}
                  </li>
                </ul>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default InvoicesList;

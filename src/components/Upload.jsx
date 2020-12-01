import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

const Upload = () => {
  const { register, handleSubmit } = useForm();
  const [uploadedFile, setUploadedFile] = useState({});

  const onSubmit = async (data) => {
    console.log(data.filename[0]);
    //loop if want to upload multiple files at once
    const formData = new FormData();
    formData.append("filename", data.filename[0]);
    try {
      const res = await axios.post("/api/invoices/upload-invoice", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      const { id, invoice_Number, balance_due } = res.data;
      setUploadedFile({ id, invoice_Number, balance_due });
    } catch (error) {
      if (error.response.status === 5000) {
        console.log("there was a problem with the serer");
      }
    }
  };

  return (
    <>
      <Grid item style={{ margin: "0 auto" }}>
        <Typography variant="h4" style={{ textAlign: "center", marginTop: 30 }}>
          {" "}
          Upload single pdf file and click Submit
        </Typography>
        <Paper style={{ padding: 20, marginTop: 50, textAlign: "center" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} type="file" name="filename" />
            <button>Submit</button>
          </form>
        </Paper>
      </Grid>

      <Grid item style={{ margin: "0 auto" }} xs={6}>
        <Paper
          style={{
            width: 300,
            textAlign: "center",
            padding: 5,
            marginTop: 10,
          }}
        >
          {uploadedFile ? (
            <div>
              <h3>RA Number: {uploadedFile.invoice_Number}</h3>
              <h3>Balance Due: $ {uploadedFile.balance_due}</h3>
            </div>
          ) : (
            <div>Check the server</div>
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default Upload;

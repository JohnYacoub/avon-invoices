import React from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Paper style={{ padding: 40 }}>
      <Grid item xs={12} container direction="row">
        <Grid item xs={12}>
          <Typography variant="h5">Avon Closing Invoices</Typography>
        </Grid>
        <Grid item xs={12} container justify="flex-end" alignItems="flex-end">
          <Grid item>
            <Typography variant="h6">
              <Button
                component={Link}
                to="/"
                style={{ backgroundColor: "turquoise" }}
              >
                Upload{" "}
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              <Button component={Link} to="/list">
                View invoices{" "}
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NavBar;

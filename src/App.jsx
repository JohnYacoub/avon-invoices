import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import deepOrange from "@material-ui/core/colors/deepOrange";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Upload from "./components/Upload";
import InvoicesList from "./components/InvoicesList";
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: deepOrange[400], contrastText: deepOrange[50] },
    secondary: {
      main: brown[500],
    },
    background: { default: deepOrange[100], paper: blueGrey[100] },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Upload} />
          <Route exact path="/list" component={InvoicesList} />
        </Switch>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

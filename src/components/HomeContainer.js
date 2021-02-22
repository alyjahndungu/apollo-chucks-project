import React, { Fragment } from 'react';
import CategoriesList from './CategoriesList';
import { makeStyles } from "@material-ui/core/styles";

// import SearchQuote from './SearchQuote'

import {Typography, Box, Divider} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

  quoteText: {
    color: "#1c2a48",
    fontSize: 18,
    textAlign: "center",

  },
  image: {
    height: 190,
    width: 220
  },
  title: {
    color: "#1a237e",
    fontSize: 28,
    textAlign: "center",
  },
}));
const HomeContainer = (props) => {
  const homeWrapperStyle = {
    marginTop: '50px'
  }


  const classes = useStyles();

  return (
    <Fragment>
      <div style={homeWrapperStyle}>
        <Typography variant="h3" className={classes.title}>
          Welcome to what Chuck Norris Says
        </Typography>

        <Divider />
          <Box textAlign="center" my={3}>
                <img
                  alt="Under development"
                  className={classes.image}
                  src="./undraw_feeling_happy_jymo.svg"
                />
              </Box>
        <Typography variant="subtitle1" className={classes.quoteText}>
          Pick a category to see the jokes
        </Typography>
      </div>
      <div style={homeWrapperStyle}>
        <CategoriesList />
      </div>

        <Box justifyContent="center" style={{ marginTop: 52 }}>
        <footer class="page-footer font-small special-color-light pt-4">
          <div class="footer-copyright text-center special-color-dark py-3">
            © 2021 Copyright:
            <a href="https://www.linkedin.com/in/elijah-ndung-u-472980192/">
              {" "}
              Ternstone Developer
            </a>
          </div>
        </footer>
      </Box>

    </Fragment>

  )
}

export default HomeContainer
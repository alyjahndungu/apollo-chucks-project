import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CategoriesList from "./CategoriesList";

import Moment from "react-moment";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Page from "./Page";

const QUOTE_QUERY = gql`
  query Joke($category: String!) {
    jokes(category: $category) {
      id
      value
      icon_url
      created_at
      updated_at
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f6f8",
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  card: {
    maxWidth: 700,
    margin:'auto',
    marginTop: "50px",
    marginBottom: "50px",
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#e8eaf6",
  },
  quoteText: {
    color: "#1c2a48",
    fontSize: 12,
  },
  catTitle: {
    color: "#1a237e",
    fontSize: 22,
    alignItems: "center",
  },
  textCategory: {
    marginLeft: 360,
    color: "#c51162",
    fontSize: 16,
    textTransform: "uppercase",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Quote = (props) => {
  const classes = useStyles();

  let { category } = props.match.params;
  return (
    <Page className={classes.root}>
     <Grid container spacing={3}>
            <Grid item xs={12} sm={1}/>
            <Grid item xs={12} sm={10}>
          <Query query={QUOTE_QUERY} variables={{ category }}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              console.log(data);
              const { value, icon_url, updated_at } = data.jokes;

              return (
                <Page className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}/>
                    <Grid item xs={12} sm={8}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Card className={classes.card}>
                        <CardHeader
                          avatar={<img src={icon_url} alt="" />}
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon style={{ color: "#3949ab" }} />
                            </IconButton>
                          }
                          title="Chuck Norris"
                          subheader={
                            <Moment format="YYYY-MM-DD">{updated_at}</Moment>
                          }
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className={classes.quoteText}
                            component="p"
                          >
                            {value}
                          </Typography>
                        </CardContent>
                        <Box display="flex" justifyContent="space-between">
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon style={{ color: "#d81b60" }} />
                            </IconButton>
                            <IconButton aria-label="share">
                              <ShareIcon style={{ color: "#4a148c" }} />
                            </IconButton>
                            <Typography
                              variant="h4"
                              className={classes.textCategory}
                              component="p"
                            >
                              {category}
                            </Typography>
                          </CardActions>
                        </Box>
                      </Card>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}/>
                  </Grid>
                  <Box display="flex" justifyContent="center" my={2}>
                    <Typography variant="h5" className={classes.catTitle}>
                      Browse some more categories if Chuck's magnificence
                    </Typography>
                  </Box>
                  <Divider />

                   <Grid container spacing={3}>
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={10}>
                  <Box display="flex" flexWrap="wrap"  p={1}
        m={1}>
              <CategoriesList />
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}/>
            </Grid>
                  {/* <CategoriesList /> */}
                </Page>
              );
            }}
          </Query>
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
      </Grid>
            <Grid item xs={12} sm={1}/>
      
              </Grid>
    </Page>
  );
};

export default Quote;

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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const RANDOM_QUERY = gql`
  query Quote {
    random_joke {
      id
      value
      icon_url
      created_at
      updated_at
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#e8eaf6",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  catTitle: {
    color: "#1a237e",
    fontSize: 22,
    alignItems: "center",
  },
  textCategory: {
    marginLeft: 300,
    color: "#c51162",
    fontSize: 16,
    textTransform: "uppercase",
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

  return (
    <Fragment>
      <Query query={RANDOM_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          console.log(data);
          const { value, icon_url, updated_at } = data.random_joke;

          return (
            <Fragment>
              <Typography variant="h3">Here's your random quote!</Typography>

              <Card className={classes.card}>
                <CardHeader
                  avatar={<img src={icon_url} alt="" />}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Chuck Norris"
                  subheader={<Moment format="YYYY-MM-DD">{updated_at}</Moment>}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {value}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
              <Box display="flex" justifyContent="center" my={2}>
                <Typography variant="h5" className={classes.catTitle}>
                  Browse some more categories if Chuck's magnificence
                </Typography>
              </Box>
              <Divider />
              <CategoriesList />
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Quote;

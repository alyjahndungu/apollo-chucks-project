import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import CategoriesItem from "./CategoriesItem";
import Page from './Page';
import {Typography, Box, Divider, Container, Grid} from '@material-ui/core';


const CATEGORY_QUERY = gql`
  query CategoryQuery {
    categories
  }
`;

const CategoriesList = (props) => {
  const { data, loading, error } = useQuery(CATEGORY_QUERY);

  if (loading) {
    return <h4>Loading..</h4>;
  }

  if (error) {
    console.log(error);
    return <h4> Some Error{error.message}</h4>;
  }

  if (data) {
    return (
      <>
      <Container maxWidth={false}>
       <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
      <Box display="flex" flexWrap="wrap"  p={1}
        m={1} >
        {data.categories.map((category) => (
          <CategoriesItem key={category} category={category} />
        ))}
      </Box>
      </Grid></Grid>
      </Container>
      </>
    );
  }
};

export default CategoriesList;

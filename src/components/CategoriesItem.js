import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import Chip from '@material-ui/core/Chip';
import Page from './Page';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: '#f4f6f8',
    
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor: '#880e4f',
    color: '#fff',
    fontSize:12
  },
}));

export default function CategoriesItem({ category }) {
  const classes = useStyles();
  return (
    <Page className={classes.root}>
    <Chip
      label={category}
      className={classes.chip}
      component={Link}
      to={`/category/${category}`}
      clickable
    />
    </Page>

  )
}
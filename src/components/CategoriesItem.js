import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor: '#1c2331',
    color: '#fff',
    fontSize:12
  },
}));

export default function CategoriesItem({ category }) {
  const classes = useStyles();
  return (
    <Chip
      label={category}
      className={classes.chip}
      component={Link}
      to={`/category/${category}`}
      clickable
    />

  )
}
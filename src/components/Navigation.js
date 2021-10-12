import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
  },

  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/anime" className={classes.link}>
              {' '}
              Portal{' '}
            </Link>
          </Typography>

          <Link to="/Signup" className={classes.link}>
            <Button color="inherit">New User</Button>
          </Link>
          <Link to="/login" className={classes.link}>
            <Button color="inherit">LogIn</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

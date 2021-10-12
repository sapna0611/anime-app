import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: 'black',
    height: 1400,
  },
  albumname: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 100,
  },
  descriptions: {
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  fix: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: 1000,
  },
  icon1: {
    fontSize: 70,
    color: '#3f51b5',
  },
  icon2: {
    fontSize: 70,
    color: '#d81b60',
  },
  button: {
    width: 300,
  },
}));

export default function AnimeDetails() {
  const { state } = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.fix}>
              <div className={classes.image}>
                <img
                  src={state.animes.cover_image}
                  className={classes.image}
                  alt={state.animes.titles.en}
                />
              </div>
              <div>
                <Typography className={classes.albumname}>
                  {state.animes.titles.en}{' '}
                </Typography>
                <Button variant="contained" className={classes.button}>
                  Season Year:{state.animes.season_year}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  Season Period :{state.animes.season_period}
                </Button>
                <br />
                <br />{' '}
                <Button variant="contained" className={classes.button}>
                  Episodes :{state.animes.episodes_count}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  Episodes Duration :{state.animes.episode_duration}
                </Button>
                <br />
                <br />
                <Button variant="contained" className={classes.button}>
                  Start Date :{state.animes.start_date}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  End Date :{state.animes.end_date}
                </Button>
                <br />
                <br />
                <Button variant="contained" className={classes.button}>
                  Version :{state.animes.version}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  Score :{state.animes.score}
                </Button>
                <br />
                <br />
                <Typography className={classes.descriptions}>
                  {state.animes.descriptions.en}{' '}
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

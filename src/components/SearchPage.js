import { useEffect, useState } from 'react';
import Anime from './Anime';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: 'flex',
    flexDirection: 'row',
  },

  anime: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'italic',
    fontFamily: 'sans-serif',
    textAlign: 'right',
    marginLeft: 20,
  },

  root1: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  div1: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  anime1: {
    color: 'green',
    fontSize: 30,
  },
  grid1: {
    marginLeft: 'auto',
    alignItems: 'center',
  },
}));

function Animes(props) {
  const classes = useStyles();
  const { data, setAnimes } = props;
  const [input, setInput] = useState('');
  useEffect(() => {}, [props.data]);

  const searchHandler = (e) => {
    const val = e.target.value;
    setInput(val);
  };
  const search = (e) => {
    e.preventDefault();
    setAnimes(
      data.filter((anime) => {
        if (input == '') {
          return anime;
        } else if (
          anime.titles.en.toLowerCase().includes(input.toLowerCase()) ||
          anime.descriptions.en.toLowerCase().includes(input.toLowerCase())
        ) {
          return anime;
        }
      })
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className={classes.div1}>
          <div>
            <Typography className={classes.anime}>
              <span className={classes.anime1}>Anime Review</span>{' '}
            </Typography>
          </div>
          <div>
            <Paper component="form" className={classes.root1}>
              <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchHandler}
              />

              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon onClick={search} />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div>
          <br />
          <Grid container spacing={5}>
            {props?.data?.length > 0 &&
              props?.data?.map((animeData, index) => (
                <Grid item xs={12} sm={4} className={classes.grid1}>
                  <Anime data={animeData} key={props.anilist_id} />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Animes;

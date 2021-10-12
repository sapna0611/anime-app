import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: palette.primary.dark[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  paper: {
    height: 350,
    width: 300,
    backgroundColor: 'grey',
    padding: 10,
  },

  anime: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginLeft: 24,
    padding:20,
   
  },
 
  image: {
    height: 230,
    width: 230,
    marginTop: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
 
  link :{
    textDecoration:'none',
  },
  button:{
  marginLeft:50,
  width:200
 
  },
  button1:{
    marginLeft:90,
    marginRight:20,
    marginTop:10,
    marginBottom:10,
   width:120
   
    },
    genres:{
    color: 'Black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginLeft: 24,
    padding:20,
    },
    
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function Anime(props) {
  const animes = props.data;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} key={props.key}>
        <Paper className={classes.paper}>
          <Link
            to={{
              pathname: `/animes/${props.data.anilist_id}`,
              state: { animes: animes },
            }}
          >
            <Paper
              className={classes.image}
              style={{
                backgroundImage: `url('${props?.data?.cover_image}')`,
                backgroundSize: '100% 100%',
                marginTop: 30,
              }}
            ></Paper>
          </Link>
          <br />
          <Typography className={classes.anime}>
            {props?.data?.titles.en}
          </Typography>
         <a href={props?.data?.trailer_url} target="_blank" className={classes.link}> 
         <Button variant="contained" color="secondary" className={classes.button}>
 Watch trailer
</Button>
          </a> <br/><br/>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
 genres
</Button>
<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.genres}>
         Genres
        </DialogTitle>
        <DialogContent dividers>
        <Typography >
            {props?.data?.genres.map((genre)=>(
               <Button variant="outlined" color="primary"  className={classes.button1}>
              {genre}
             </Button>
            ))}

          </Typography>
        </DialogContent>
        
      </Dialog>
      <br/><br/>
      <Button variant="contained"  className={classes.button}>
      Season Year:{props?.data?.season_year}
</Button> <br/><br/> <Button variant="contained" className={classes.button}>
Episodes :{props?.data?.episodes_count}
</Button>

         
        </Paper>
      </Grid>
    </Grid>
  );
}

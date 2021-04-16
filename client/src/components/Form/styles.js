import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
      width: '100%',      
    },
    marginTop: theme.spacing(1),
  },
  buttonSubmit: {
    marginBottom: 2,
    margin: theme.spacing(3, 0, 2),
  },

})); 

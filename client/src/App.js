import React, { useEffect } from 'react';
import { AppBar, Typography, Grid, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [ dispatch ]);

  return (
    <React.Fragment>
        <AppBar position="static" className={classes.appBar} color="primary">
          <Typography variant="h5" className={classes.title}>
            Active Buildings Inventory Managment System
          </Typography>
        </AppBar>
        <Grid container component="main" className={classes.root} >                          
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7} component={Paper} square>
              <div style={{maxWidth: "100%", margin: "3%" }}>                
                <Posts/>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} component={Paper} square>
              <div className={classes.paper}>
                <Typography component="h1" variant ="h5" color="primary">Enter Item Information</Typography>
                <Form />
              </div>              
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default App;

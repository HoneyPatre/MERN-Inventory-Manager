import React, { useState } from 'react';
import { Grid, Button, TextField} from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postData.itemcode !== "" &&  postData.vendorname !== "" && postData.name1 !== "" && postData.name2 !== "" && postData.price >= 0){
            dispatch(createPost(postData));
        }
        else{            
            alert("Incorrect or Incomplete Data");      
        }
        clear();
    }
    const clear = () => {        
        setPostData({ 
            itemcode: '',
            name1: '',
            name2: '',
            price: 0,
            vendorname: '',
            date: new Date().toISOString()
        });
    }
    const [postData, setPostData] = useState({ 
        itemcode: '',
        name1: '',
        name2: '',
        price: 0,
        vendorname: '',
        date: new Date().toISOString(),
    })
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString());

    const handleDateChange = (date) => {
        setSelectedDate(date.toISOString());
        setPostData({ ...postData , date: date.toISOString() });  
    };
    return(
            <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
                
                <TextField 
                    fullWidth
                    variant="outlined"
                    name="itemcode" 
                    label="Item Code" 
                    value={postData.itemcode} 
                    onChange={(e) => setPostData({ ...postData , itemcode: e.target.value })}
                />
                <TextField 
                    fullWidth
                    variant="outlined"
                    name="name1" 
                    label="Name 1" 
                    value={postData.name1} 
                    onChange={(e) => setPostData({ ...postData , name1: e.target.value })}
                />
                <TextField 
                    fullWidth
                    variant="outlined"
                    name="name2" 
                    label="Name 2" 
                    value={postData.name2} 
                    onChange={(e) => setPostData({ ...postData , name2: e.target.value })}
                />
                <TextField 
                    type="number"
                    fullWidth
                    variant="outlined"
                    name="price" 
                    label="price" 
                    value={postData.price} 
                    onChange={(e) => setPostData({ ...postData , price: e.target.value })}
                />
                <TextField 
                    fullWidth
                    variant="outlined"
                    name="vendorname" 
                    label="Vendor Name" 
                    value={postData.vendorname} 
                    onChange={(e) => setPostData({ ...postData , vendorname: e.target.value })}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        fullWidth
                        inputVariant="outlined"
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider> 
                <Grid container spacing={3} justify="center">
                        <Grid item >
                            <Button className={classes.buttonSubmit} type="submit" variant="contained" color="primary">Submit</Button>                        </Grid>
                        <Grid item>
                            <Button className={classes.buttonSubmit} onClick={clear} variant="contained" color="primary">Clear</Button>                            
                        </Grid>
                </Grid>                
            </form> 
    ) 
}

export default Form;
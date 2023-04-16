import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed gray',
        borderRadius: '50%',
        width: 200,
        height: 200,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    iconButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    label: {
        marginTop:30,
        textAlign: 'center',
    },
}));


export default function FormDialog(props) {
    const { openPopup, setOpenPopup } = props;
    const handleClose = () => {
        setOpenPopup(false);
    };

    const classes = useStyles();
    const [file, setFile] = React.useState('');

    const handleFileChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    };


    return (
        <Dialog open={openPopup} onClose={handleClose} >

            <div style={{ backgroundColor: '#E3E3E3' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ marginTop: 24, marginLeft: 24, fontWeight: 'bold' }}>Add Car Brand</h2>
                    <Button onClick={handleClose} style={{ marginTop: 26 }}><CloseIcon /></Button>
                </div>
                <h4 style={{ marginLeft: 24, marginBottom: 24 }}>Setup new car brand</h4>
            </div>
            <FormControl variant="standard">
                <DialogContent>
                <h2 style={{ marginTop: 24, fontWeight: 'bold' }}>Brand Logo</h2>
                <div className={classes.root} onClick={() => document.getElementById('brand-logo-upload').click()}>
                    <input
                        id="brand-logo-upload"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        inputProps={{ multiple: false }}
                        style={{ display: 'none' }}
                    />
                    {file ? (
                        <img src={file} alt="brand logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <>
                            <IconButton className={classes.iconButton}>
                                <PhotoCamera />
                            </IconButton>
                            <div className={classes.label}>
                                <span>Brands logo</span>
                            </div>
                        </>
                    )}
                </div>
                <h2 style={{ marginTop: 24, fontWeight: 'bold' }}>Brand Details</h2>
                <div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <label>Brand Name</label>    
                            <TextField label="Input Content" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                            <FormControl sx={{ minWidth: 260 }}>
                                <label>Brand Status</label>  
                                <Select defaultValue={"1"}>
                                    <MenuItem value= "1" sx={{color:'green'}}><AdjustRoundedIcon sx={{marginRight:2,color:'green'}}/>Active</MenuItem>
                                    <MenuItem value= "2" sx={{color:'gray'}}><AdjustRoundedIcon sx={{marginRight:2,color:'gray'}}/>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <label>Brand Description</label>  
                            <TextField label="Input Content" variant="outlined" fullWidth multiline rows={4} />
                            </Grid>
                        </Grid>
                </div>
                </DialogContent>
                <DialogActions spacing={2}>
                    <Button onClick={handleClose} sx ={{backgroundColor:'white',color:'black',border: 1 ,borderStyle:'solid'}}>Cancel</Button>
                    <Button onClick={handleClose} sx ={{backgroundColor:'blue',color:'white'}}>Create Brand</Button>
                </DialogActions>
            </FormControl>
        </Dialog>
    );
}

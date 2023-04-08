import React from 'react';
import { styled } from '@mui/system';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography
} from '@material-ui/core';
import { Link } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import LensIcon from '@mui/icons-material/Lens';
import { makeStyles } from "@material-ui/core/styles";

const useStyles2 = makeStyles({
  colorBorderCell: {
    borderLeft: '3px solid green'
  },
  colorBorderCell2: {
    borderLeft: '3px solid black'
  }
});

const useStyles = styled((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  branch_make: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  }
}));

// let PageSize = 10;

const TableCars = ({cars}) => {

  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableBody>
         
          {cars.map((row, index) => (
            <TableRow key={row._id}>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Avatar alt={row.model} src={row.branch_logo} className={classes.avatar} />
                  </Grid>
                </Grid>
              </TableCell>
              {index % 2 === 0 ?
                <TableCell className={classes2.colorBorderCell}>
                  <Grid container>
                    <Grid>
                      <Typography className={classes.branch_make} sx={{ color: "#2F465F" }}>{row.branch_make}</Typography>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Typography color="textSecondary" variant="body2">{row.branch_model} |</Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textSecondary" variant="body2"><Link href="">{row.branch_model} Models</Link></Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
                :
                <TableCell className={classes2.colorBorderCell2}>
                  <Grid container>
                    <Grid>
                      <Typography className={classes.branch_make} sx={{ color: "#2F465F" }}>{row.branch_make}</Typography>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Typography color="textSecondary" variant="body2">{row.branch_model} |</Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textSecondary" variant="body2"><Link href="">{row.branch_model} Models</Link></Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
              }

              <TableCell>
                <Typography color="primary" variant="subtitle2">Last Update</Typography>
                <Typography color="textSecondary" variant="body2">25/12/{row.branch_year}</Typography>
              </TableCell>
              <TableCell>
                {index % 2 === 0 ?
                  <Button variant="outlined" style={{ color: 'green', backgroundColor: '#FAFAFA', borderColor: 'white' }} startIcon={<LensIcon style={{ color: 'green' }} />}>
                    Active
                  </Button> :
                  <Button variant="outlined" style={{ color: '#5F5F5F', backgroundColor: '#FAFAFA', borderColor: 'white' }} startIcon={<LensIcon style={{ color: '#5F5F5F' }} />}>
                    Inactive
                  </Button>
                }
              </TableCell>
              <TableCell>
                <Button variant="outlined" style={{ borderColor: 'black', color: 'black' }}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCars;
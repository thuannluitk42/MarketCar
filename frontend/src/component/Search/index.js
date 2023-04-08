import * as React from 'react';
import TextField from "@mui/material/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
    root: {
      [`& fieldset`]: {
        borderRadius: 15
      },
      width: 350,
    },
  });

const Search = ({ setSearch }) => {
    const search = useStyles();
	return (
        <TextField className={search.root}
        onChange={({ currentTarget: input }) => setSearch(input.value)}
        sx={{ backgroundColor: '#F5F5F5' }}
        placeholder='Search car brand'
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),

        }}
      />
	);
};

export default Search;
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySort = ({ sort, setSort }) => {
	const handleSelectChange = (event) => {
		setSort({ sort: event.target.value, order: sort.order });
	  }

	// const onArrowChange = () => {
	// 	if (sort.order === "asc") {
	// 		setSort({ sort: sort.sort, order: "desc" });
	// 	} else {
	// 		setSort({ sort: sort.sort, order: "asc" });
	// 	}
	// };

	return (
		// <div className={styles.container}>
		// 	<p className={styles.sort_by}>Sort By :</p>
		// 	<select
		// 		onChange={onSelectChange}
		// 		className={styles.select}
		// 		defaultValue={sort.sort}
		// 	>
		// 		<option value="year">Year</option>
		// 		<option value="rating">Rating</option>
		// 	</select>
		// 	<button className={styles.arrow_btn} onClick={onArrowChange}>
		// 		<p className={styles.up_arrow}>&uarr;</p>
		// 		<p className={styles.down_arrow}>&darr;</p>
		// 	</button>
		// </div>

        <div style={{marginRight:30}}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={sort.sort} onChange={handleSelectChange}>
            <MenuItem value= "">All</MenuItem>
            <MenuItem value="branch_year">Last Updated</MenuItem>
            <MenuItem value= "branch_make">Brand Name</MenuItem>
            <MenuItem value= "branch_model">Number of Models</MenuItem>
        </Select>
        </FormControl>
        </div>
	);
};

export default MySort;
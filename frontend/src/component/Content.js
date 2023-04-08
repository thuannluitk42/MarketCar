import React from 'react';
import { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Search from './Search';
import TableCars from './Table'
import MyPagination from './Pagination'
import MySort from './Sort';
import axios from "axios"

const base_url = process.env.REACT_APP_API_URL;

export default function Content() {
  const [searchBrand, setSearchBrand] = React.useState('');
  const [obj, setObj] = React.useState({});
  const [sort, setSort] = React.useState({ sort: "branch_type", order: "Asc" });
  const [page, setPage] = React.useState(1);
  let PageSize = 10;

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order
          }&search=${searchBrand}`;
        const { data } = await axios.get(url);
        setObj(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllCars();
  }, [sort, page, searchBrand]);

  return (

    <Box>
      <Box sx={{ display: 'flex', justify: 'flex-start', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ paddingRight: 10, mr: 10, color: '#2F465F' }}>CAR BRANDS LIST</Typography>
        <MySort sort={sort} setSort={(sort)=>setSort(sort)}/>
        <Search setSearch={(searchBrand) => setSearchBrand(searchBrand)} />
        <Button variant="contained" startIcon={<AddIcon />} sx={{ ml: 20 }}>{capitalizeWords('Add Brand')}</Button>
      </Box>
      <Box sx={{ height: 400, width: '100%', mt: 10 }}>
        <TableCars cars={obj.cars ? obj.cars : []} />
        <MyPagination
        className="pagination-bar"
        currentPage={page}
        totalCount={100}
        pageSize={PageSize}
        onPageChange={page => setPage(page)}
      />
      </Box>
    </Box>
  );
}
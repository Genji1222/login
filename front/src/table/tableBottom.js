import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import styled from '@emotion/styled';
import { Button, FormControl, MenuItem, Select, ToggleButton, Typography } from '@mui/material';
import { useState } from 'react';
const Pagibottom = styled('div')(() => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  paddingTop: '20px',
  backgroundColor: 'rgba(255, 255, 255)',
  position: 'relative'
}));
const SelectContainer = styled('div')(() => ({
  width: '48px',
  height: '24px',
  position: 'absolute',
  right: '30px',
  cursor: 'pointer',  
  paddingTop: '5px',
}));


export default function TableBottom({
  rowsPage,
  onChangeRowsPage,
  first,
  end,
  hasNextPage,
  hasPreviousPage,
  onNextPage,
  onPrevPage,
  onNext,
  onPrev,
}) {
  return (
    <>
      <Pagibottom>
        <ToggleButton
          onClick={() => first && onPrev()}
          value="center"
          aria-label="centered"
          sx={{ width: '20px', border: 0 }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </ToggleButton>
        <ToggleButton
          value="center"
          aria-label="centered"
          sx={{ width: '20px', border: 0 }}
          onClick={() => hasPreviousPage && onPrevPage()}
        >
          <KeyboardArrowLeftIcon />
        </ToggleButton>

        <ToggleButton
          value="center"
          onClick={() => hasNextPage && onNextPage()}
          aria-label="centered"
          sx={{ width: '20px', border: 0 }}
        >
          <KeyboardArrowRightIcon />
        </ToggleButton>
        <ToggleButton
          onClick={() => first && onNext()}
          value="center"
          aria-label="centered"
          sx={{ width: '20px', border: 0 }}
        >
          <KeyboardDoubleArrowRightIcon />
        </ToggleButton>
        <Typography variant="subtitle1" display="block" gutterBottom sx={{ ml: 4, paddingTop: '12px' }}>
          {first}/{end}
        </Typography>
        <SelectContainer>
          <FormControl size="small" sx={{ width: '65px', height: '20px' }}>
            <Select
              value={rowsPage}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              size="small"
              onChange={(e) => onChangeRowsPage(Number(e.target.value))}
              sx={{
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                borderRadius: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 0,
                },
                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
              style={{ height: '40px' }}
              id="colorSelect"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </SelectContainer>
      </Pagibottom>
    </>
  );
}

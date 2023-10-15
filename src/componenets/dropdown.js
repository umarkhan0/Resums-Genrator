import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
let cruntDate = new Date().getFullYear()
const names = [
  cruntDate.toString(),
  (cruntDate - 1).toString(),
  (cruntDate - 2).toString(),
  (cruntDate - 3).toString(),
  (cruntDate - 4).toString(),
  (cruntDate - 5).toString(),
  (cruntDate - 6).toString(),
  (cruntDate - 7).toString(),
  (cruntDate - 8).toString(),
  (cruntDate - 9).toString(),
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 function SingleSelectPlaceholder({ selectedValue, onChange , plac , widthMul }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value); // Call the onChange callback with the selected value
  };

  return (
    <div>
      <FormControl sx={{ width: widthMul }}>
        <Select
          displayEmpty
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ height: "41px" }} 
        >
          <MenuItem disabled value="">
            <em className=' opacity-30'>{plac}</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedValue, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}



export default SingleSelectPlaceholder 
import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function SingleSelectPlaceholderMonth({ selectedValue, onChange , plac }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value); // Call the onChange callback with the selected value
  };

  return (
    <div>
      <FormControl sx={{ width: "120px" }}>
        <Select
          displayEmpty
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput />}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ height: '41px' }} // Adjust the height as needed
        >
          <MenuItem disabled value="">
            <em className=' opacity-30'>{plac}</em>
          </MenuItem>
          {monthName.map((name) => (
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

export default SingleSelectPlaceholderMonth;

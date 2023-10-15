import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ onChange }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: "230px" }}>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={age}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ height: "41px" }}
        >
          <MenuItem disabled value="">
            <em className='opacity-30'>Beginner (AI)</em>
          </MenuItem>
          <MenuItem value={"Beginner"}>Beginner (AI)</MenuItem>
          <MenuItem value={'Alimentary'}>Alimentary (A2)</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate (B1)</MenuItem>
          <MenuItem value={"upper Intermediate"}>Upper Intermediate (B1)</MenuItem>
          <MenuItem value={"advance"}>Advance (C1)</MenuItem>
          <MenuItem value={"proficient"}>Proficient (C2)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

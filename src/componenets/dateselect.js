import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
     <p className='mb-2'>Degree</p>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      {/* <InputLabel id="demo-select-small-label">nhj</InputLabel> */}
      <Select
        // labelId="demo-select-small-label"
        // id="demo-select-small"
        value={age}
        // label="Age"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    </>
  );
}
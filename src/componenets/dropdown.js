import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
let dateLine  = new Date().getFullYear() - 5
for (var year = new Date().getFullYear(); year >= dateLine; year--) {
    console.log(year);
  }
  
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SingleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setPersonName(value);
    console.log(value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

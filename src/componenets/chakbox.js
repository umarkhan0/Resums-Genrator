import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function MyComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        required
        control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
        label="I currently work here"
      />
    </FormGroup>
  );
}

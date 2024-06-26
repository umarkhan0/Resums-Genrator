import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ onSelectionChange }) {
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleSelectionChange = (event, newValue) => {
    setSelectedValue(newValue);
    if (onSelectionChange) {
      onSelectionChange(newValue); 
    }
  };

  return (
    <>
      <label htmlFor='combo-box-demo' className="block text-[#535353] font-medium mb-2">
        Degree
      </label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete
          className='mb-3'
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: "100%",
          }}
          value={selectedValue}
          onChange={handleSelectionChange}
          renderInput={(params) => (
            <div style={{ width: '100%' }}>
              <TextField {...params} placeholder="Select a Degree" />
            </div>
          )}
        />
      </div>
    </>
  );
}
const top100Films = [
  "Bachelor of Arts (BA)", "Bachelor of Science (BS)", "Bachelor of Fine Arts (BFA)", "Master of Arts (MA)", "Master of Science (MS)", "Master of Business Administration (MBA)", "Doctor of Philosophy (PhD)", "Doctor of Medicine (MD)", "Juris Doctor (JD)", "Doctor of Engineering (D.Eng.)", "Doctor of Education (Ed.D)", "Bachelor of Engineering (BEng)", "Bachelor of Business Administration (BBA)", "Bachelor of Laws (LLB)", "Master of Laws (LLM)", "Doctor of Dental Medicine (DMD)", "Bachelor of Architecture (BArch)", "Master of Architecture (MArch)", "Bachelor of Commerce (BCom)", "Master of Commerce (MCom)", "Bachelor of Computer Science (BCS)", "Master of Computer Science (MCS)", "Bachelor of Nursing (BSN)", "Master of Nursing (MSN)", "Bachelor of Social Work (BSW)", "Master of Social Work (MSW)", "Bachelor of Music (BM)", "Master of Music (MM)", "Bachelor of Education (BEd)", "Master of Education (MEd)", "Bachelor of Fine Arts (BFA)", "Master of Fine Arts (MFA)", "Bachelor of Science in Nursing (BSN)", "Master of Public Health (MPH)", "Doctor of Veterinary Medicine (DVM)", "Bachelor of Science in Engineering (BSE)", "Master of Public Administration (MPA)", "Doctor of Pharmacy (PharmD)", "Bachelor of Science in Business Administration (BSBA)", "Master of Science in Information Technology (MSIT)", "Diploma in Marketing", "Diploma in Graphic Design", "Diploma in Culinary Arts", "Diploma in Digital Marketing", "Diploma in Web Development"
];
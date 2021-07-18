import React, { useState } from 'react';

import { Box, Grommet, CheckBox } from 'grommet';


const Theme = {
  global: {
    colors: {
      blue: '#00C8FF'
    },
  },
};

const SimpleCheckBox = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    
      <Box  pad="large">
        <CheckBox  {...rest} checked={checked}  onChange={onChange} />
      </Box>
    
  );
};

export const Toggle = () => <SimpleCheckBox toggle />;

export default {
  title: 'Input/CheckBox/Toggle',
};

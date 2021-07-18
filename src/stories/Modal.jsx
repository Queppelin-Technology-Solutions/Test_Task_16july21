import React from 'react';

import { Box, Button, Collapsible, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const Theme = {
  global: {
    colors: {
      red: '#FC6161'
    },
  },
};


export const Modal= props => {
  const [open, setOpen] = React.useState(false);
    return(
<Grommet theme={grommet}>
      <Box align="start" gap="small">
        <Button color='red' primary onClick={() => setOpen(!open)} label="Delete" />
        <Collapsible open={open} {...props}>
          <Box
            background="light-2"
            round="medium"
            pad="large"
            align="right"
            justify="right"
          >
            <Text>Are you sure you want to delete!</Text>
            <Button color='grey' primary onClick={() => setOpen(!open)} label="Cancel" />
          </Box>
        </Collapsible>
        
      </Box>
      </Grommet>
    );
} 
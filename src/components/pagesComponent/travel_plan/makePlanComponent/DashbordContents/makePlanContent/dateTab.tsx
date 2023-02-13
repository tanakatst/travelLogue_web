import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TimePlan from './timePlan';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Props {
    dateArray:Date[],
    setDateArray:React.Dispatch<React.SetStateAction<Date[]>>
}
export default function DateTab(props:Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
//   console.log(props.dateArray)

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto' aria-label="basic tabs example">
            {props.dateArray.map((date, index)=>(
                 <Tab key={index} label={format(date, 'MMMdd日', { locale: ja }).toString()} {...a11yProps(index)} />
            ))}

        </Tabs>
        <Box pt={4} pl={3}>
            <TimePlan />
        </Box>
      <TabPanel value={value} index={1} >
        ２日目の予定
      </TabPanel>
      <TabPanel value={value} index={2}>
        3日目の予定
      </TabPanel>
      </Box>
    </Box>
  );
}

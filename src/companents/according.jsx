import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function According() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      className="border border-gray-700 shadow-md"
      style={{ borderRadius: '20px', backgroundColor: '#161616' }}
    >
      <AccordionSummary
        expandIcon={
          <ArrowDownwardIcon sx={{ color: expanded ? '#6c2dba' : 'white' }} />
        }
        aria-controls="panel1-content"
        id="panel1-header"
        className="transition-colors duration-300"
        style={{
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
      >
        <Typography
          component="span"
          className={`py-[25px] text-[20px] font-bold transition-colors duration-300 ${
            expanded ? 'text-[#6c2dba]' : 'text-white'
          }`}
        >
          <p className={`text-[20px] font-bold transition-colors duration-300 ${
            expanded ? 'text-[#6c2dba]' : 'text-white'
          }`}>Why are the prices so cheap?</p>
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        className="bg-[#161616] p-4"
        style={{
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        <Typography className="text-[#ccc] text-[16px]">
          Our prices are really cheap compared to the quality. The reason is
          that we don't have excess labor in our web studio, so we don't have
          excess costs. That's why we keep our prices low compared to others.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

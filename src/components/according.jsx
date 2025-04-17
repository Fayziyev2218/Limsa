import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTranslation } from "react-i18next";

export default function According({text,text2}) {
  const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation();

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
          }`}>{text}</p>
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
          {text2}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

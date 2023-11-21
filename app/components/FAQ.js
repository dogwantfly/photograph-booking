"use client";

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const qaData = [
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 0,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 1,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 2,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 3,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 4,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 5,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 6,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 7,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 8,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 9,
  },
];
const theme = {
  secondary: 'rgba(234, 80, 123, 1)'
}

export default function BasicAccordion() {
  const [expanded, setExpanded] = useState(['faq0']);
  const handleChange = (panel) => () => {
    if (expanded.includes(panel)) {
      setExpanded(expanded.filter(item => item !== panel))
    } else {
      setExpanded([...expanded, panel])
    }
  };
  return (
    <ul>
      {qaData.map((qa, index) => (
        <Accordion
          component="li"
          key={index + qa.id}
          defaultExpanded={qa.id === 0}
          elevation={0}
          sx={{
            '&:first-of-type': {
              borderRadius: 0,
            },
            '&::before': {
              display: 'none'
            },
            border: '1px solid rgba(31, 19, 0, 1)',
            marginBottom: 2
          }}
          square={true}
          onChange={handleChange(`faq${qa.id}`)}
        >
          <AccordionSummary
            expandIcon={ expanded.includes(`faq${qa.id}`) ? <RemoveIcon htmlColor={theme.secondary}/>: <AddIcon htmlColor="black"/> }
            aria-controls={`faq${qa.id}-content`}
            id={`faq${qa.id}-header`}
            sx={{
              alignItems: 'center'
            }}
          >
            <Typography sx={{
              fontSize: 18,
              fontWeight: 700,
              marginRight: 1,
              lineHeight: 1.2
            }}>Q.</Typography>
            <Typography>{qa.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{
              display: 'flex',
              paddingRight: 3
            }}>
          <Typography sx={{
              fontSize: 18,
              fontWeight: 700,
              marginRight: 1,
              color: theme.secondary,
              lineHeight: 1.2
            }}>A.</Typography>
            <Typography>{qa.answer}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </ul>
  );
}

'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { faq as qaData } from '../../lib/placeholder-data';

export default function BasicAccordion() {
  const [expanded, setExpanded] = useState(['faq0']);
  const handleChange = (panel) => () => {
    if (expanded.includes(panel)) {
      setExpanded(expanded.filter((item) => item !== panel));
    } else {
      setExpanded([...expanded, panel]);
    }
  };
  return (
    <Box
      sx={{
        listStyle: 'none',
        px: 0,
      }}
      component="ul"
    >
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
              display: 'none',
            },
            border: '1px solid rgba(31, 19, 0, 1)',
            marginBottom: 2,
          }}
          square={true}
          onChange={handleChange(`faq${qa.id}`)}
        >
          <AccordionSummary
            expandIcon={
              expanded.includes(`faq${qa.id}`) ? (
                <RemoveIcon color="secondary" htmlColor="secondary" />
              ) : (
                <AddIcon htmlColor="black" />
              )
            }
            aria-controls={`faq${qa.id}-content`}
            id={`faq${qa.id}-header`}
            sx={{
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                marginRight: 1,
                lineHeight: 1.2,
              }}
            >
              Q.
            </Typography>
            <Typography>{qa.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                pr: 3,
              }}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: 18,
                  fontWeight: 700,
                  marginRight: 1,
                  color: theme.palette.secondary.main,
                  lineHeight: 1.2,
                })}
              >
                A.
              </Typography>
              <Typography>{qa.answer}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

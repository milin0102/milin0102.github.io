import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Web Development', text: ''},
  { number: 'Web Designing', text: '', },
  { number: 'Digital Marketing', text: '', },
  { number: 'Progressive Web Apps', text: '', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Services</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
         
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

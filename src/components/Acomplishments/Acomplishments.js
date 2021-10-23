import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Years of Experience', },
  { number: 5, text: 'Open Source Projects'},
  { number: 10, text: 'Programming Languages', },
  { number: 3.33, text: 'GPA', }
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>
            Personal Achievements
        </SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>
                        {card.number}+
                    </BoxNum>
                    <BoxText>
                        {card.text}
                    </BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;

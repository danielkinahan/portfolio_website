import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hi there, <br />
                I'm Daniel Kinahan
            </SectionTitle>
            <SectionText>
                A software engineer with a focus in effective, privacy-first healthcare delivery and embedded systems.
            </SectionText>
            <Button onClick={() => window.location = '#projects'}>Learn More</Button>
        </LeftSection>
    </Section>
);

export default Hero;
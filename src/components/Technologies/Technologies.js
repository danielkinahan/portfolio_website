import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <br />
        <SectionDivider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            Worked with a range of technologies to blah blah blah.
        </SectionText>
        <List>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                    Experienced  with <br />
                    React.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experienced  with <br />
                        Node and databases
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiZend size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experienced  with <br />
                        React.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>

);

export default Technologies;


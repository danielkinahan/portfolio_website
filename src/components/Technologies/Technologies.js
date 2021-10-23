import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a plethora of technologies. Here are my favourites.
        </SectionText>
        <List>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Object-Oriented</ListTitle>
                    <ListParagraph>
                    Experienced  with <br />
                    C++, Java, Perl, Python, R
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Embedded</ListTitle>
                    <ListParagraph>
                        Experienced  with <br />
                        C, Assembly
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiZend size="3rem" />
                <ListContainer>
                    <ListTitle>Web Development</ListTitle>
                    <ListParagraph>
                        Experienced  with <br />
                        React.js, PHP, Oracle SQL
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>

);

export default Technologies;


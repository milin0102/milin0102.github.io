import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to <br/>
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
         I am a full-stack Web Application Developer and Software Developer.I have a Bachelor of Technology degree in Computer Science , 
         and my primary focus and inspiration for my studies is Web Development.
      </SectionText>
      <Button onClick={()=>window.location='/'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;
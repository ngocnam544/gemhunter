import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        welcome
      </SectionTitle>
      <SectionText>
        loren mipsum
      </SectionText>
      <Link href="#projects">
      <Button>Learn more</Button>
      </Link>
      
    </LeftSection>
  </Section>
);

export default Hero;
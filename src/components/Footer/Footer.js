import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call          
          </LinkTitle>
          <LinkItem href="tel:111-111-111-111">111-111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email         
          </LinkTitle>
          <LinkItem href="mailto:milinshah0102@gmail.com">milinshah0102@gmail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>We develop, you explore</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/milin0102">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/milin-shah-aa1674131/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/direct/inbox/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;

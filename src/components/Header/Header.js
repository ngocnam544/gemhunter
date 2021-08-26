import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="">
        <a style={{display:"flex",alignItems: "center", color:"white"}}>
          Logo
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>About us</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#partner">
          <NavLink>Partner</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Portfolio</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>News</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;

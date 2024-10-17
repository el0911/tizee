"use client"
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
// import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu toggle

// Styled-components for the header and its elements
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 35px 25px;
  position: absolute;
  z-index: 10;
  width:100vw;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    padding: 20px;
  }

  &.mobile {
    display: flex;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 20px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay:any = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: ${({ isOpen }:any) => (isOpen ? "block" : "none")};
  }
`;

// React component
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HeaderContainer>
        {/* Logo */}
        <Image width={100} height={100} src={'/TicZee..png'} alt={""}></Image>

        {/* Desktop and mobile navigation */}
        <Nav className={mobileOpen ? "mobile" : ""}>
          <NavItem href="/">HOME</NavItem>
          <NavItem href="/participants">PARTICIPANTS</NavItem>
          <NavItem href="/host">HOST</NavItem>
        </Nav>

        {/* Mobile Menu Toggle Icon */}
        {/* <MobileMenuIcon onClick={toggleMobileMenu}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </MobileMenuIcon> */}
      </HeaderContainer>

      {/* Mobile overlay */}
      <Overlay isOpen={mobileOpen} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;

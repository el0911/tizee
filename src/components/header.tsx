"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: window.innerWidth <= 768 ? '10px 15px' : '35px 25px',
        position: 'absolute',
        zIndex: 10,
        width: '100vw',
      }}>
        {/* Logo */}
        <Image width={100} height={100} src={'/TicZee..png'} alt={""}></Image>

        {/* Desktop and mobile navigation */}
        <nav style={{
          display: mobileOpen || window.innerWidth > 768 ? 'flex' : 'none',
          gap: '20px',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          position: window.innerWidth <= 768 ? 'absolute' : 'static',
          top: window.innerWidth <= 768 ? '60px' : 'auto',
          right: window.innerWidth <= 768 ? '0' : 'auto',
          backgroundColor: window.innerWidth <= 768 ? '#333' : 'transparent',
          width: window.innerWidth <= 768 ? '100%' : 'auto',
          padding: window.innerWidth <= 768 ? '20px' : '0',
        }}>
          <a href="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: window.innerWidth <= 768 ? '20px' : '18px',
            padding: window.innerWidth <= 768 ? '10px 0' : '0',
            hover: { color: '#ddd' },
          }}>HOME</a>
          <a href="/participants" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: window.innerWidth <= 768 ? '20px' : '18px',
            padding: window.innerWidth <= 768 ? '10px 0' : '0',
            hover: { color: '#ddd' },
          }}>PARTICIPANTS</a>
          <a href="/host" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: window.innerWidth <= 768 ? '20px' : '18px',
            padding: window.innerWidth <= 768 ? '10px 0' : '0',
            hover: { color: '#ddd' },
          }}>HOST</a>
        </nav>

        {/* Mobile Menu Toggle Icon */}
        <div onClick={toggleMobileMenu} style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
        }}>
          {/* You can replace this with any menu icon component */}
          {mobileOpen ? 'X' : 'Menu'}
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div onClick={toggleMobileMenu} style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }} />
      )}
    </>
  );
};

export default Header;

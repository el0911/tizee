"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  // Update isMobile state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: isMobile ? '10px 15px' : '35px 25px',
        position: 'absolute',
        zIndex: 10,
        width: '100vw',
      }}>
        {/* Logo */}
        <Image width={100} height={100} src={'/TicZee..png'} alt={""}></Image>

        {/* Desktop and mobile navigation */}
        <nav style={{
          display: mobileOpen || !isMobile ? 'flex' : 'none',
          gap: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '60px' : 'auto',
          right: isMobile ? '0' : 'auto',
          backgroundColor: isMobile ? '#333' : 'transparent',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '20px' : '0',
        }}>
          <a href="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: isMobile ? '20px' : '18px',
            padding: isMobile ? '10px 0' : '0',
          }}>HOME</a>
          <a href="/participants" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: isMobile ? '20px' : '18px',
            padding: isMobile ? '10px 0' : '0',
          }}>PARTICIPANTS</a>
          <a href="/host" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: isMobile ? '20px' : '18px',
            padding: isMobile ? '10px 0' : '0',
          }}>HOST</a>
        </nav>

        {/* Mobile Menu Toggle Icon */}
        <div onClick={toggleMobileMenu} style={{
          display: isMobile ? 'block' : 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
        }}>
          {mobileOpen ? 'X' : 'Menu'}
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && isMobile && (
        <div onClick={toggleMobileMenu} style={{
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

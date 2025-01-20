import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return <FooterContainer>© 2025 Expense Tracker. All Rights Reserved.</FooterContainer>;
};

export default Footer;

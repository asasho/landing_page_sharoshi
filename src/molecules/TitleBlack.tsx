import React from "react";
import styled from "styled-components";

interface PROPS {
  title: string;
}

const TitleBlack: React.FC<PROPS> = ({ title }) => {
  return (
    <Box>
      <Title>{title}</Title>
    </Box>
  );
};

export default TitleBlack;

const Box = styled.div`
  width: 90%;
  height: 80px;
  margin: 0 5% 10px 5%;
  background-color: black;
  text-align: left;
  display: table;
`;

const Title = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 24px;
  padding-left: 20px;
  padding-right: 20px;
  display: table-cell;
  vertical-align: middle;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

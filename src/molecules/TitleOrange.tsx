import React from "react";
import styled from "styled-components";

interface PROPS {
  title: string;
}

const TitleOrange: React.FC<PROPS> = ({ title }) => {
  return (
    <OrangeBox>
      <Box></Box>
      <Title>{title}</Title>
    </OrangeBox>
  );
};

export default TitleOrange;

const OrangeBox = styled.div`
  position: relative;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 80px;
  margin: 0 60px;
  padding: 0;
  border-top: solid 20px #f29f1c;
  border-left: solid 20px #f29f1c;
  border-bottom: solid 20px transparent;
  border-right: solid 20px transparent;
  text-align: left;
  @media (max-width: 768px) {
    width: 80px;
    height: 40px;
    margin: 0 20px;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 30px;
  left: 100px;
  font-weight: 600;
  font-size: 32px;
  padding: 20px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
    top: 15px;
    left: 40px;
    text-align: left;
  }
`;

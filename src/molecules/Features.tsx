import React from "react";
import styled from "styled-components";

interface PROPS {
  id: number;
  title: string;
  text: string;
}

const Features: React.FC<PROPS> = ({ id, title, text }) => {
  return (
    <Box>
      <Text>
        {id}．{title}
      </Text>
      <Content style={{ paddingLeft: "20px" }}>{text}</Content>
    </Box>
  );
};

export default Features;

const Box = styled.div`
  width: 46%;
  height: 150px;
  margin: 20px 2%;
  background-color: #ffebcd;
  @media (max-width: 768px) {
    width: 90%;
    margin: 20px 5%;
    height: 180px;
  }
`;

const Text = styled.h3`
  padding-left: 20px;
`;

const Content = styled.p`
  padding-left: 20px;
  padding-right: 20px;
`;

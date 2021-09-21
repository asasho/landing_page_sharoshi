import React from "react";
import styled from "styled-components";

interface PROPS {
  text: string;
}

const Benefits: React.FC<PROPS> = ({ text }) => {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
};

export default Benefits;

const Box = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  background-color: ButtonFace;
`;

const Text = styled.h2`
  color: black;
  font-size: 13px;
  @media (max-width: 768px) {
    font-size: 2.9vw;
  }
`;

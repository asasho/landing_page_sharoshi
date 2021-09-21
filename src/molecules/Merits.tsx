import React from "react";
import styled from "styled-components";

interface PROPS {
  image: string;
  text: string;
}

const Merits: React.FC<PROPS> = ({ image, text }) => {
  return (
    <Box>
      <Img src={image} />

      <Gray>
        <Text>{text}</Text>
      </Gray>
    </Box>
  );
};

export default Merits;

const Box = styled.div`
  width: 29%;
  height: 400px;
  margin: 0 2%;
  position: relative;
  @media (max-width: 768px) {
    width: 90%;
    height: 200px;
  }
`;

const Img = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -70%);
  height: auto;
  @media (max-width: 768px) {
    transform: translate(-50%, -80%);
  }
`;

const Text = styled.h2`
  text-align: left;
  padding: 20px;
  color: #f29f1c;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const Gray = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 80%;
  height: 150px;
  background-color: ButtonFace;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    height: 100px;
  }
`;

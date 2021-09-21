import React from "react";
import styled from "styled-components";

interface PROPS {
  text: string;
  image: string;
}

const Matters: React.FC<PROPS> = ({ text, image }) => {
  return (
    <Box>
      <Text>{text}</Text>
      <ImgBox>
        <Img src={image} alt={image} />
      </ImgBox>
    </Box>
  );
};

export default Matters;

const Box = styled.div`
  width: 40%;
  margin: 0 5%;
  text-align: left;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;
  }
`;

const Text = styled.h2`
  color: #e66d45;
  height: 80px;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const ImgBox = styled.div`
  width: 411px;
  height: 281px;
`;

import React from "react";
import styled from "styled-components";

interface PROPS {
  image: string;
  text: string;
  content: string;
}

const Supports: React.FC<PROPS> = ({ image, text, content }) => {
  return (
    <SupportBox>
      <Box>
        <Img src={image} style={{}} />
        <Text>{text}</Text>
      </Box>
      <Text2>{content}</Text2>
    </SupportBox>
  );
};

export default Supports;

const SupportBox = styled.div`
  width: 400px;
  margin: 40px 5%;
  @media (max-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Box = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 10px 25px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 300px;
    height: 225px;
  }
`;

const Img = styled.img`
object-fit: fill;
width: 200px;
height: 200px;
border-radius: 10px;
box-shadow: box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #fff;
@media (max-width: 768px) {
    width: 150px;
    height: 150px;
}
`;

const Text = styled.h2`
  color: #395475;
  text-align: center;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Text2 = styled.h2`
  color: #395475;
  font-size: 18px;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
  }
`;
